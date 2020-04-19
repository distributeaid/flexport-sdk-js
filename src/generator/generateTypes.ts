import { promises as fs } from 'fs'
import * as path from 'path'
import * as ts from 'typescript'
import { parseOpenAPI } from './parseOpenAPI'
import { printNode } from './printNode'

const hasFix = ['Shipment']

const ApiTypes = {
	CollectionRef: '/api/refs/collection',
	ObjectRef: '/api/refs/object',
	Error: '/api/error',
	Page: '/api/collections/paginated',
	Response: '/api/response',
} as const

const TypesById = Object.entries(ApiTypes).reduce(
	(t, [k, v]) => ({ ...t, [v]: k }),
	{} as { [key: string]: string },
)

export type Item = {
	$ref?: string
	oneOf?: Item[]
	type?: 'string' | 'integer' | 'boolean' | 'array' | 'object'
	enum?: string[]
	description?: string
	items?: Item
	example?: string
	default?: string
	format?: string
	required?: string[]
	properties?: {
		[key: string]: Item
	}
}

export const makePropertyDefinition = (def: Item) => {
	const deps: string[] = []
	let t
	if (def.$ref) {
		const dep = def.$ref.replace(/#\/components\/schemas\//, '')
		deps.push(dep)
		t = ts.createTypeReferenceNode(dep, [])
	} else if (def.enum) {
		t = ts.createUnionTypeNode(
			def.enum.map((s) => ts.createLiteralTypeNode(ts.createStringLiteral(s))),
		)
	} else if (def.oneOf) {
		const defs = def.oneOf.map((t) => makePropertyDefinition(t))
		deps.push(...defs.map(({ deps }) => deps).flat())
		t = ts.createUnionTypeNode(defs.map(({ type }) => type))
	} else if (def.type === 'array') {
		const { type: itemType, deps: itemDeps } = makePropertyDefinition(
			def.items as Item,
		)
		deps.push(...itemDeps)
		t = ts.createArrayTypeNode(itemType)
	} else {
		let type = def.type as string
		if (def.type === 'integer') type = 'number'
		t = ts.createTypeReferenceNode(type, [])
	}
	return {
		type: t,
		deps: [...new Set(deps)],
	}
}

const createObjectType = (objectName: string, schema: Item) => {
	const deps: string[] = []
	const t = ts.createTypeLiteralNode(
		Object.entries(schema.properties || []).map(([name, def]) => {
			const { type, deps: d } = makePropertyDefinition(def)
			deps.push(...d)
			let p = ts.createPropertySignature(
				[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
				name,
				schema.required?.includes(name)
					? undefined
					: ts.createToken(ts.SyntaxKind.QuestionToken),
				type,
				undefined,
			)
			const isObjectProperty = name === '_object'
			if (isObjectProperty) {
				p = ts.createPropertySignature(
					[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
					name,
					undefined,
					ts.createTypeReferenceNode(
						`Type.${TypesById[def.example as string] || objectName}`,
						[],
					),
					undefined,
				)
				deps.push('Type')
			}
			const comment = []
			if (def.description) comment.push(def.description)
			if (!isObjectProperty) {
				if (def.description) comment.push('')
				if (def.type)
					comment.push(
						`JSON-schema: ${def.type}${def.format ? ` (${def.format})` : ''}`,
					)
				if (def.example) comment.push(`@example ${JSON.stringify(def.example)}`)
			}

			if (!def.example) {
				if (def.format === 'date') {
					comment.push('@example "1970-01-01"')
				}
				if (def.format === 'time') {
					comment.push('@example "10:05:08+01:00"')
				}
				if (def.format === 'date-time') {
					comment.push('@example "1970-01-01T10:05:08+01:00"')
				}
			}
			if (comment.length)
				ts.addSyntheticLeadingComment(
					p,
					ts.SyntaxKind.MultiLineCommentTrivia,
					`*\n * ${comment.join('\n * ')}\n `,
					true,
				)
			return p
		}),
	)
	return {
		type: t,
		deps: [...new Set(deps)],
	}
}

const makeType = (name: string, schema: Item) => {
	const def = schema.properties
		? createObjectType(name, schema)
		: makePropertyDefinition(schema)

	const t = ts.createTypeAliasDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		name,
		undefined,
		def.type,
	)
	const comment = []
	if (schema.description) comment.push(schema.description.trim())
	if (schema.example)
		comment.push('', `@example ${JSON.stringify(schema.example)}`, '')
	comment.push(
		'Auto-generated type. Do not change.',
		'@see https://api.flexport.com/docs/v2/flexport',
	)
	if (hasFix.includes(name)) {
		comment.push(
			`@deprecated Use ${name} (The OpenAPI definition for this class contains known bugs, which have been  in the type ${name}).`,
		)
	}
	ts.addSyntheticLeadingComment(
		t,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)
	return {
		type: t,
		deps: [...new Set(def.deps)],
	}
}

const makeImport = (name: string) =>
	ts.createImportDeclaration(
		undefined,
		undefined,
		ts.createImportClause(
			undefined,
			ts.createNamedImports([
				ts.createImportSpecifier(undefined, ts.createIdentifier(name)),
			]),
			undefined,
			// ts.createNamespaceImport(ts.createIdentifier('salami'))
		),
		ts.createLiteral(`./${name}`),
	)

const makeIndex = (type: string) =>
	ts.createExportDeclaration(
		undefined,
		undefined,
		(ts.createExportSpecifier(undefined, '*') as unknown) as ts.NamedExports,
		ts.createLiteral(`./${type}`),
	)

const makeTypes = (types: Map<string, string>) =>
	ts.createEnumDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.createIdentifier('Type'),
		[...types.entries()].map(([type, _object]) =>
			ts.createEnumMember(type, ts.createStringLiteral(_object)),
		),
	)

parseOpenAPI(
	path.join(process.cwd(), 'api-docs', 'v2.yaml'),
	path.join(process.cwd(), 'api-docs', 'corrections.yaml'),
)
	.then(async (f) => {
		// Generate Types
		const typeIdentifiers: Map<string, string> = new Map()
		Object.entries(ApiTypes).forEach(([k, v]) => typeIdentifiers.set(k, v))
		const types: string[] = []
		await Promise.all(
			Object.entries(f.components.schemas as { [key: string]: any }).map(
				async ([name, schema]) => {
					const { type, deps } = makeType(name, schema)
					const nodes = [
						...deps.map((dep) => printNode(makeImport(dep))),
						printNode(type),
					]
					const _object = schema?.properties?._object?.example
					if (_object) typeIdentifiers.set(name, _object)
					types.push(name)
					return fs.writeFile(
						path.join(process.cwd(), 'src', 'generated', `${name}.ts`),
						nodes.join('\n'),
						'utf8',
					)
				},
			),
		)
		// Write Type.ts
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'Type.ts'),
			printNode(makeTypes(typeIdentifiers)),
			'utf8',
		)
		// Write index.ts
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'index.ts'),
			[...types, 'Type'].map(makeIndex).map(printNode).join('\n'),
			'utf8',
		)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
