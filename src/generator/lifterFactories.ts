import * as ts from 'typescript'
import { Item } from './factories'

export const makeLifter = (
	name: string,
	schema: Item,
	schemas: { [key: string]: Item },
) => {
	const dateFields = Object.entries(schema.properties || {})
		.filter(([, { description }]) => !/DEPRECATED/.test(description || ''))
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

	const liftedType = ts.createTypeAliasDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		`Lifted${name}`,
		undefined,
		ts.createIntersectionTypeNode([
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
				...linkedObjectFields.map((f) => {
					const t = ts.createPropertySignature(
						[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
						f,
						schema.required?.includes(f)
							? undefined
							: ts.createToken(ts.SyntaxKind.QuestionToken),
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
						schema.required?.includes(f)
							? undefined
							: ts.createToken(ts.SyntaxKind.QuestionToken),
						ts.createTypeReferenceNode('Option', [
							ts.createTypeReferenceNode('ResolvableCollection', []),
						]),
						undefined,
					)
					if (schema.properties?.[f]) addComment(t, schema.properties[f])
					return t
				}),
			]),
		]),
	)

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
						undefined,
						undefined,
						ts.createBlock(
							[ts.createReturn(ts.createIdentifier('original'))],
							true,
						),
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

	const deps = []
	if (linkedObjectFields.length) {
		deps.push('Option', 'ResolvableObject')
	}
	if (linkedCollectionFields.length) {
		deps.push('Option', 'ResolvableCollection')
	}

	return {
		lifter,
		liftedType,
		deps: [...new Set(deps)],
	}
}
