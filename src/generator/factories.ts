import * as ts from 'typescript'
import { TypesById } from './knowTypes'

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

export const createPropertyDefinition = (
	def: Item,
	schemas: { [key: string]: Item },
	name: string,
) => {
	const deps: (string | { [key: string]: string })[] = []
	const enums: ts.EnumDeclaration[] = []
	if (name === undefined)
		throw new Error(`createPropertyDefinition: name is undefined!`)

	let t
	if (def.$ref !== undefined) {
		const dep = def.$ref.replace(/#\/components\/schemas\//, '')
		if (schemas[dep]?.properties?._object?.example === '/api/refs/object') {
			deps.push({ ApiObjectRef: '../types/ApiObjectRef' })
			t = ts.createTypeReferenceNode('ApiObjectRef', [])
		} else if (
			schemas[dep]?.properties?._object?.example === '/api/refs/collection'
		) {
			deps.push({
				ApiCollectionRef: '../types/ApiCollectionRef',
			})
			t = ts.createTypeReferenceNode('ApiCollectionRef', [])
		} else {
			deps.push(dep)
			t = ts.createTypeReferenceNode(dep, [])
		}
	} else if (def.enum !== undefined) {
		enums.push(
			ts.createEnumDeclaration(
				[],
				[ts.createToken(ts.SyntaxKind.ExportKeyword)],
				`${name}Types`,
				def.enum.map((s) =>
					ts.createEnumMember(
						ts.createIdentifier(s.toUpperCase()),
						ts.createStringLiteral(s),
					),
				),
			),
		)
		t = ts.createTypeReferenceNode(`${name}Types`, [])
	} else if (def.oneOf !== undefined) {
		const defs = def.oneOf.map((t, k) =>
			createPropertyDefinition(t, schemas, `${name}Types${k}`),
		)
		deps.push(...defs.map(({ deps }) => deps).flat())
		enums.push(...defs.map(({ enums }) => enums).flat())
		t = ts.createUnionTypeNode(defs.map(({ type }) => type))
	} else if (def.type === 'array') {
		const {
			type: itemType,
			deps: itemDeps,
			enums: itemEnums,
		} = createPropertyDefinition(def.items as Item, schemas, name)
		deps.push(...itemDeps)
		enums.push(...itemEnums)
		t = ts.createArrayTypeNode(itemType)
	} else {
		if (def.type === 'integer') {
			t = ts.createTypeReferenceNode('number', [])
		} else if (def.type === 'object') {
			t = ts.createTypeReferenceNode('Record', [
				ts.createTypeReferenceNode('string', []),
				ts.createTypeReferenceNode('any', []),
			])
		} else {
			t = ts.createTypeReferenceNode(def.type as string, [])
		}
	}
	return {
		type: t,
		enums,
		deps: [...new Set(deps)],
	}
}

export const capitalize = (s: string): string =>
	`${s.substr(0, 1).toUpperCase()}${s.substr(1)}`

export const snakeToCamelCase = (s: string): string =>
	s.split('_').map(capitalize).join('')

export const createObjectType = (
	objectName: string,
	schema: Item,
	schemas: { [key: string]: Item },
) => {
	const deps: (string | { [key: string]: string })[] = []
	const enums: ts.EnumDeclaration[] = []
	const t = ts.createTypeLiteralNode(
		Object.entries(schema.properties ?? []).map(([name, def]) => {
			const { type, deps: d, enums: e } = createPropertyDefinition(
				def,
				schemas,
				`${objectName}${snakeToCamelCase(name)}`,
			)
			deps.push(...d)
			enums.push(...e)
			let p = ts.createPropertySignature(
				[ts.createToken(ts.SyntaxKind.ReadonlyKeyword)],
				name,
				schema.required?.includes(name) ?? false
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
			if (def.description !== undefined) {
				comment.push(def.description)
				if (def.description.includes('DEPRECATED')) {
					comment.push('@deprecated Do not use! This field is deprecated.')
				}
			}
			if (!isObjectProperty) {
				if (def.description !== undefined) comment.push('')
				if (def.type !== undefined)
					comment.push(
						`JSON-schema: ${def.type}${
							def.format !== undefined ? ` (${def.format})` : ''
						}`,
					)
				if (def.example !== undefined)
					comment.push(`@example ${JSON.stringify(def.example)}`)
			}

			if (def.example === undefined) {
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
			if (comment.length > 0)
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
		enums,
	}
}

export const makeType = (
	name: string,
	schema: Item,
	schemas: { [key: string]: Item },
) => {
	const def = schema.properties
		? createObjectType(name, schema, schemas)
		: createPropertyDefinition(schema, schemas, name)

	const t = ts.createTypeAliasDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		name,
		undefined,
		def.type,
	)
	const comment = []
	if (schema.description !== undefined) comment.push(schema.description.trim())
	if (schema.example !== undefined)
		comment.push('', `@example ${JSON.stringify(schema.example)}`, '')
	if (comment.length > 0)
		ts.addSyntheticLeadingComment(
			t,
			ts.SyntaxKind.MultiLineCommentTrivia,
			`*\n * ${comment.join('\n * ')} \n `,
			true,
		)
	return {
		type: t,
		deps: [...new Set(def.deps)],
		enums: def.enums,
	}
}

export const makeImport = ([exp, mod]: string[]) => {
	return ts.createImportDeclaration(
		undefined,
		undefined,
		ts.createImportClause(
			undefined,
			ts.createNamedImports([
				ts.createImportSpecifier(undefined, ts.createIdentifier(exp)),
			]),
		),
		ts.createLiteral(mod),
	)
}

export const makeIndex = (type: string) =>
	ts.createExportDeclaration(
		undefined,
		undefined,
		(ts.createExportSpecifier(undefined, '*') as unknown) as ts.NamedExports,
		ts.createLiteral(`./${type}`),
	)

export const makeTypes = (types: Map<string, string>) =>
	ts.createEnumDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.createIdentifier('Type'),
		[...types.entries()].map(([type, _object]) =>
			ts.createEnumMember(type, ts.createStringLiteral(_object)),
		),
	)
