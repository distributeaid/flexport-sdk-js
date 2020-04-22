import { parseOpenAPI } from '../generator/parseOpenAPI'
import * as path from 'path'
import { printNode } from '../generator/printNode'
import * as ts from 'typescript'
import { promises as fs } from 'fs'
import {
	Item,
	createPropertyDefinition,
	createObjectType,
} from '../generator/factories'
import { Type } from '../generated/Type'

type Responses = {
	[key: string]: {
		description: string
		content: {
			[key: string]: {
				schema: Item
			}
		}
	}
}

type Parameters = {
	name: string
	description: string
	in: string
	required?: boolean
	schema: Item
}[]

type Operation = {
	operationId: string
	summary: string
	description?: string
	tags?: string[]
	parameters?: Parameters
	responses: Responses
}

type ApiMethodInfo = {
	summary: string
	description?: string
	method: string
	path: string
	parameters?: Parameters
	responses: Responses
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
							responses: def.responses,
						},
					}),
					{},
				),
			}),
			{} as { [key: string]: ApiMethodInfo },
		)

		const deps: string[] = []

		const clientMethods = ts.createObjectLiteral(
			Object.entries(operations).map(([operationId, def]) => {
				const params = []
				if (def.parameters) {
					params.push(
						ts.createParameter(
							undefined,
							undefined,
							undefined,
							'params',
							undefined,
							ts.createTypeLiteralNode(
								def.parameters?.map((param) => {
									const { type, deps: d } = createPropertyDefinition(
										param.schema,
									)
									deps.push(...d)
									return ts.createPropertySignature(
										[],
										ts.createComputedPropertyName(
											ts.createStringLiteral(param.name),
										),
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
					)
				}

				const pathParams = def.parameters?.filter(({ in: i }) => i === 'path')
				const queryParams = def.parameters?.filter(({ in: i }) => i === 'query')
				const paramProperties = []
				if (pathParams?.length) {
					paramProperties.push(
						ts.createPropertyAssignment(
							'path',
							ts.createObjectLiteral(
								pathParams.map((param) =>
									ts.createPropertyAssignment(
										ts.createComputedPropertyName(
											ts.createStringLiteral(param.name),
										),
										ts.createElementAccess(
											ts.createIdentifier('params'),
											ts.createStringLiteral(param.name),
										),
									),
								),
							),
						),
					)
				}
				if (queryParams?.length) {
					paramProperties.push(
						ts.createPropertyAssignment(
							'query',
							ts.createObjectLiteral(
								queryParams.map((param) =>
									ts.createPropertyAssignment(
										ts.createComputedPropertyName(
											ts.createStringLiteral(param.name),
										),
										ts.createElementAccess(
											ts.createIdentifier('params'),
											ts.createStringLiteral(param.name),
										),
									),
								),
							),
						),
					)
				}

				const apiClientArgumens = [
					ts.createPropertyAssignment(
						'method',
						ts.createStringLiteral(def.method.toUpperCase()),
					),
					ts.createPropertyAssignment('path', ts.createStringLiteral(def.path)),
				]
				if (queryParams?.length || pathParams?.length) {
					apiClientArgumens.push(
						ts.createPropertyAssignment(
							'params',
							ts.createObjectLiteral(paramProperties),
						),
					)
				}

				const returns = Object.entries(def.responses)
					.map(([httpStatusCode, { content }]) =>
						Object.entries(content).map(([contentType, { schema }]) => {
							// Response is binary
							if (schema.type === 'string' && schema.format === 'binary') {
								return {
									type: ts.createTypeReferenceNode('string', []),
									deps: [],
								}
							}
							// Response is paginated
							if (
								schema.properties?.data?.properties?._object?.example ===
								Type.Page
							) {
								const ref =
									schema.properties?.data?.properties?.data?.items?.$ref
								let dep
								let t: ts.TypeNode = ts.createKeywordTypeNode(
									ts.SyntaxKind.UnknownKeyword,
								)
								if (ref) {
									dep = ref.replace(/#\/components\/schemas\//, '')
									t = ts.createTypeReferenceNode(dep, [])
								}
								return {
									type: ts.createTypeReferenceNode(`ApiPageObject`, [t]),
									deps: dep ? [dep] : [],
								}
							}
							// Regular page response
							if (schema.properties?._object.example === Type.Response) {
								const ref = schema.properties?.data?.$ref
								let dep
								let t: ts.TypeNode = ts.createKeywordTypeNode(
									ts.SyntaxKind.UnknownKeyword,
								)
								if (ref) {
									dep = ref.replace(/#\/components\/schemas\//, '')
									t = ts.createTypeReferenceNode(dep, [])
								}
								return {
									type: t,
									deps: dep ? [dep] : [],
								}
							}
							// Object is returned (e.g. on updates)
							if (schema.$ref) {
								const dep = schema.$ref.replace(/#\/components\/schemas\//, '')
								const t = ts.createTypeReferenceNode(dep, [])
								return {
									type: t,
									deps: dep ? [dep] : [],
								}
							}
							return createObjectType(
								`${operationId}HTTP${httpStatusCode}${contentType}Response`,
								schema,
							)
						}),
					)
					.flat()

				deps.push(...returns.map(({ deps }) => deps).flat())
				const returnTypes = returns.map(({ type }) => type).flat()

				const m = ts.createPropertyAssignment(
					operationId,
					ts.createArrowFunction(
						undefined,
						undefined,
						params,
						undefined,
						undefined,
						ts.createCall(
							ts.createIdentifier('apiClient'),
							[ts.createUnionTypeNode(returnTypes)],
							[ts.createObjectLiteral(apiClientArgumens)],
						),
					),
				)
				const comment = []
				comment.push(def.summary)
				comment.push(`${def.method.toUpperCase()} ${def.path}`)
				if (def.description) {
					comment.push('')
					comment.push(def.description.trim())
				}
				comment.push(
					Object.entries(def.responses).map(
						([httpStatusCode, { description }]) =>
							`- ${httpStatusCode}: ${description}`,
					),
				)

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
			'Auto-generated code. Do not change.',
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
					ts.createNamedImports([
						ts.createImportSpecifier(
							undefined,
							ts.createIdentifier('FlexportApiClient'),
						),
					]),
				),
				ts.createLiteral('../FlexportApiClient'),
			),
			ts.createImportDeclaration(
				undefined,
				undefined,
				ts.createImportClause(
					undefined,
					ts.createNamedImports([
						ts.createImportSpecifier(
							undefined,
							ts.createIdentifier('ApiPageObject'),
						),
					]),
				),
				ts.createLiteral('../types/ApiPageObject'),
			),
			...[...new Set(deps)].map((dep) =>
				ts.createImportDeclaration(
					undefined,
					undefined,
					ts.createImportClause(
						undefined,
						ts.createNamedImports([
							ts.createImportSpecifier(undefined, ts.createIdentifier(dep)),
						]),
					),
					ts.createLiteral(`./${dep}`),
				),
			),
			client,
		]
			.map(printNode)
			.join('\n')
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'apiClient.ts'),
			c,
			'utf8',
		)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
