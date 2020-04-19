import { parseOpenAPI } from './parseOpenAPI'
import { Item, makePropertyDefinition } from './generateTypes'
import * as path from 'path'
import { printNode } from './printNode'
import * as ts from 'typescript'
import { promises as fs } from 'fs'

type Operation = {
	operationId: string
	summary: string
	description?: string
	tags?: string[]
	parameters?: {
		name: string
		description: string
		required?: boolean
		schema: Item
	}[]
}

type ApiMethodInfo = {
	summary: string
	description?: string
	method: string
	path: string
	parameters: {
		name: string
		description: string
		required?: boolean
		schema: Item
	}[]
}

parseOpenAPI(
	path.join(process.cwd(), 'api-docs', 'v2.yaml'),
	path.join(process.cwd(), 'api-docs', 'corrections.yaml'),
)
	.then(async (f) => {
		const operations = Object.entries(
			f.paths as { [key: string]: { [key: string]: Operation } },
		).reduce(
			(ops, [path, operations]) => ({
				...ops,
				...Object.entries(operations).reduce(
					(ops, [method, def]) => ({
						...ops,
						[def.operationId]: {
							summary: def.summary,
							description: def.description,
							method,
							path,
							parameters: def.parameters,
						},
					}),
					{},
				),
			}),
			{} as { [key: string]: ApiMethodInfo },
		)

		const deps: string[] = []

		const clientMethods = ts.createObjectLiteral(
			Object.entries(operations).map(([key, def]) => {
				const m = ts.createPropertyAssignment(
					key,
					ts.createArrowFunction(
						undefined,
						undefined,
						[
							ts.createParameter(
								undefined,
								undefined,
								undefined,
								'params',
								undefined,
								ts.createTypeLiteralNode(
									def.parameters.map((param) => {
										const { type, deps: d } = makePropertyDefinition(
											param.schema,
										)
										deps.push(...d)
										return ts.createPropertySignature(
											[],
											'foo',
											param.required
												? undefined
												: ts.createToken(ts.SyntaxKind.QuestionToken),
											type,
											undefined,
										)
									}),
								),
								undefined,
							),
						],
						ts.createTypeReferenceNode('TE.TaskEither', [
							ts.createTypeReferenceNode('ErrorInfo', []),
							ts.createTypeReferenceNode('void', []),
						]),
						undefined,
						ts.createBlock([ts.createReturn()]),
					),
				)
				const comment = []
				comment.push(def.summary)
				comment.push(`${def.method.toUpperCase()} ${def.path}`)
				if (def.description) {
					comment.push('')
					comment.push(def.description)
				}

				ts.addSyntheticLeadingComment(
					m,
					ts.SyntaxKind.MultiLineCommentTrivia,
					`*\n * ${comment.join('\n * ')} \n `,
					true,
				)
				return m
			}),
		)

		const client = ts.createVariableStatement(
			[ts.createToken(ts.SyntaxKind.ExportKeyword)],
			ts.createVariableDeclarationList(
				[
					ts.createVariableDeclaration(
						'flexportApiV2',
						undefined,
						ts.createArrowFunction(
							undefined,
							undefined,
							[
								ts.createParameter(
									undefined,
									undefined,
									undefined,
									ts.createIdentifier('apiClient'),
									undefined,
									ts.createTypeReferenceNode('FlexportApiClient', []),
								),
							],
							undefined,
							undefined,
							clientMethods,
						),
					),
				],
				ts.NodeFlags.Const,
			),
		)

		const comment = []
		comment.push(
			'Auto-generated type. Do not change.',
			'@see https://api.flexport.com/docs/v2/flexport',
		)
		ts.addSyntheticLeadingComment(
			client,
			ts.SyntaxKind.MultiLineCommentTrivia,
			`*\n * ${comment.join('\n * ')} \n `,
			true,
		)

		// Write index.ts
		const c = [
			ts.createImportDeclaration(
				undefined,
				undefined,
				ts.createImportClause(
					undefined,
					ts.createNamespaceImport(ts.createIdentifier('TE')),
				),
				ts.createLiteral('fp-ts/lib/TaskEither'),
			),
			ts.createImportDeclaration(
				undefined,
				undefined,
				ts.createImportClause(
					undefined,
					ts.createNamedImports([
						ts.createImportSpecifier(
							undefined,
							ts.createIdentifier('ErrorInfo'),
						),
					]),
				),
				ts.createLiteral('../types/ErrorInfo'),
			),
			ts.createImportDeclaration(
				undefined,
				undefined,
				ts.createImportClause(
					undefined,
					ts.createNamedImports([
						ts.createImportSpecifier(
							undefined,
							ts.createIdentifier('FlexportApiClient'),
						),
					]),
				),
				ts.createLiteral('../FlexportApiClient'),
			),
			client,
		]
			.map(printNode)
			.join('\n')
		console.log(c)
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'apiClient.ts'),
			c,
			'utf8',
		)

		/*

		Object.entries(operations).map(([key, def]) => {
			
        })
        */

		//console.dir(operations, { depth: 9 })
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
