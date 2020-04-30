import * as ts from 'typescript'
import { Item } from './factories'

export const makeLifter = (
	name: string,
	schema: Item,
	schemas: { [key: string]: Item },
) => {
	const dateFields = Object.entries(schema.properties || {})
		.filter(([, { description }]) => !description?.includes('DEPRECATED'))
		.filter(
			([, { type, format }]) => type === 'string' && format === 'date-time',
		)
		.map(([name]) => name)

	const linkedObjectFields = Object.entries(schema.properties || {})
		.filter(([, { $ref }]) => {
			if (!$ref) return false
			const t = $ref.split('/').pop()
			if (!t) return false
			return schemas[t]?.properties?._object?.example === '/api/refs/object'
		})
		.map(([name]) => name)

	const linkedCollectionFields = Object.entries(schema.properties || {})
		.filter(([, { $ref }]) => {
			if (!$ref) return false
			const t = $ref.split('/').pop()
			if (!t) return false
			return schemas[t]?.properties?._object?.example === '/api/refs/collection'
		})
		.map(([name]) => name)

	const addComment = (t: ts.PropertySignature, schema: Item) => {
		const comment = []
		const description = schema?.description
		if (description) {
			comment.push(description)
		}
		if (comment.length)
			ts.addSyntheticLeadingComment(
				t,
				ts.SyntaxKind.MultiLineCommentTrivia,
				`*\n * ${comment.join('\n * ')}\n `,
				true,
			)
	}

	const hasType = schema.properties?._object

	// Lifted type is the same as the regular type
	let liftedType = ts.createTypeAliasDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		`Lifted${name}`,
		undefined,
		hasType
			? ts.createIntersectionTypeNode([
					ts.createTypeReferenceNode('TypedApiObject', []),
					ts.createTypeReferenceNode(name, []),
			  ])
			: ts.createTypeReferenceNode(name, []),
	)

	const hasLiftedProperties =
		dateFields.length ||
		linkedCollectionFields.length ||
		linkedObjectFields.length

	if (hasLiftedProperties) {
		const liftedTypes = [
			ts.createTypeReferenceNode('Omit', [
				ts.createTypeReferenceNode(name, []),
				ts.createUnionTypeNode(
					[
						...dateFields,
						...linkedObjectFields,
						...linkedCollectionFields,
					].map((f) => ts.createLiteralTypeNode(ts.createStringLiteral(f))),
				),
			]),
			ts.createTypeLiteralNode([
				...dateFields.map((f) => {
					const t = ts.createPropertySignature(
						[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
						f,
						schema.required?.includes(f)
							? undefined
							: ts.createToken(ts.SyntaxKind.QuestionToken),
						ts.createTypeReferenceNode('Date', []),
						undefined,
					)
					if (schema.properties?.[f]) addComment(t, schema.properties[f])
					return t
				}),
				// Option is used for links so it can be piped
				...linkedObjectFields.map((f) => {
					const t = ts.createPropertySignature(
						[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
						f,
						undefined,
						ts.createTypeReferenceNode('Option', [
							ts.createTypeReferenceNode('ResolvableObject', []),
						]),
						undefined,
					)
					if (schema.properties?.[f]) addComment(t, schema.properties[f])
					return t
				}),
				...linkedCollectionFields.map((f) => {
					const t = ts.createPropertySignature(
						[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
						f,
						undefined,
						ts.createTypeReferenceNode('Option', [
							ts.createTypeReferenceNode('ResolvableCollection', []),
						]),
						undefined,
					)
					if (schema.properties?.[f]) addComment(t, schema.properties[f])
					return t
				}),
			]),
		]
		// Create type with lifted properties
		liftedType = ts.createTypeAliasDeclaration(
			undefined,
			[ts.createToken(ts.SyntaxKind.ExportKeyword)],
			`Lifted${name}`,
			undefined,
			hasType
				? ts.createIntersectionTypeNode([
						ts.createTypeReferenceNode('TypedApiObject', []),
						...liftedTypes,
				  ])
				: ts.createIntersectionTypeNode(liftedTypes),
		)
	}

	// Default implementation is to just return the original
	let liftImplementation = ts.createBlock([
		ts.createReturn(ts.createIdentifier('original')),
	])

	if (hasLiftedProperties) {
		liftImplementation = ts.createBlock(
			[
				// Extract properties
				ts.createVariableStatement(
					undefined,
					ts.createVariableDeclarationList(
						[
							ts.createVariableDeclaration(
								ts.createObjectBindingPattern([
									...[
										...dateFields,
										...linkedObjectFields,
										...linkedCollectionFields,
									].map((f) =>
										ts.createBindingElement(undefined, undefined, f),
									),
									ts.createBindingElement(
										ts.createToken(ts.SyntaxKind.DotDotDotToken),
										undefined,
										'rest',
									),
								]),
								undefined,
								ts.createIdentifier('original'),
							),
						],
						ts.NodeFlags.Const,
					),
				),
				// Return
				ts.createReturn(
					ts.createObjectLiteral(
						[
							// Return all other fields verbatim
							ts.createShorthandPropertyAssignment('...rest'), // FIXME: How to properly construct this?
							// date fields
							...dateFields.map((f) =>
								ts.createPropertyAssignment(
									f,
									schema.required?.includes(f)
										? ts.createNew(ts.createIdentifier('Date'), undefined, [
												ts.createIdentifier(f),
										  ])
										: ts.createConditional(
												ts.createIdentifier(f),
												ts.createNew(ts.createIdentifier('Date'), undefined, [
													ts.createIdentifier(f),
												]),
												ts.createIdentifier('undefined'),
										  ),
								),
							),
							// Links to objects
							...linkedObjectFields.map((f) =>
								ts.createPropertyAssignment(
									f,
									ts.createCall(ts.createIdentifier('linkObject'), undefined, [
										ts.createIdentifier(f),
									]),
								),
							),
							// Links to collections
							...linkedCollectionFields.map((f) =>
								ts.createPropertyAssignment(
									f,
									ts.createCall(
										ts.createIdentifier('linkCollection'),
										undefined,
										[ts.createIdentifier(f)],
									),
								),
							),
						],
						true,
					),
				),
			],
			true,
		)
	}

	const lifter = ts.createVariableStatement(
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.createVariableDeclarationList(
			[
				ts.createVariableDeclaration(
					`lift${name}`,
					undefined,
					ts.createArrowFunction(
						undefined,
						undefined,
						[
							ts.createParameter(
								undefined,
								undefined,
								undefined,
								ts.createIdentifier('original'),
								undefined,
								ts.createTypeReferenceNode(name, []),
							),
						],
						ts.createTypeReferenceNode(`Lifted${name}`, []),
						undefined,
						liftImplementation,
					),
				),
			],
			ts.NodeFlags.Const,
		),
	)

	const comment = [
		'Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.',
	]
	if (schema.description) {
		comment.push(schema.description) // FIXME: remove line and make actual use of schema
	}
	ts.addSyntheticLeadingComment(
		lifter,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)

	const deps: (string | { [key: string]: string })[] = []
	if (hasType) {
		deps.push({ TypedApiObject: '../types/TypedApiObject' })
	}
	if (linkedObjectFields.length) {
		deps.push(
			{ Option: 'fp-ts/lib/Option' },
			{ ResolvableObject: '../types/Link' },
			{
				linkObject: '../links',
			},
		)
	}
	if (linkedCollectionFields.length) {
		deps.push(
			{ Option: 'fp-ts/lib/Option' },
			{ ResolvableCollection: '../types/Link' },
			{
				linkCollection: '../links',
			},
		)
	}

	return {
		lifter,
		liftedType,
		deps,
	}
}
