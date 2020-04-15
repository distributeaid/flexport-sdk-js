import * as yaml from 'js-yaml'
import { promises as fs } from 'fs'
import * as path from 'path'
import * as ts from 'typescript'

const parseOpenAPI = async (filename: string) => {
	const data = await fs.readFile(filename, 'utf8')
	const doc = yaml.safeLoad(data)
	return doc
}

type Item = {
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

/**
 * FIXME: Implement oneOf
 */
const makePropertyDefinition = (def: Item) => {
	const deps: string[] = []
	let t
	if (def.$ref) {
		const dep = `${def.$ref.replace(/#\/components\/schemas\//, '')}Base`
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

const createObjectType = (schema: Item) => {
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
					ts.createLiteralTypeNode(
						ts.createStringLiteral(def.example as string),
					),
					undefined,
				)
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
		? createObjectType(schema)
		: makePropertyDefinition(schema)

	const t = ts.createTypeAliasDeclaration(
		undefined,
		[ts.createToken(ts.SyntaxKind.ExportKeyword)],
		`${name}Base`,
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

const resultFile = ts.createSourceFile(
	'stub.ts',
	'',
	ts.ScriptTarget.Latest,
	/*setParentNodes*/ false,
	ts.ScriptKind.TS,
)
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

const printNode = (node: ts.Node) =>
	printer.printNode(ts.EmitHint.Unspecified, node, resultFile)

parseOpenAPI('/tmp/flexport.yaml')
	.then(async (f) => {
		// Generate Types

		return Promise.all(
			Object.entries(f.components.schemas).map(async ([name, schema]) => {
				const { type, deps } = makeType(name, schema as any)
				const nodes = [
					...deps.map((dep) => printNode(makeImport(dep))),
					printNode(type),
				]
				return fs.writeFile(
					path.join(process.cwd(), 'src', 'generated', `${name}Base.ts`),
					nodes.join('\n'),
					'utf8',
				)
			}),
		)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
