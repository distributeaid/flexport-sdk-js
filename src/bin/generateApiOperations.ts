import { parseOpenAPI } from '../generator/parseOpenAPI'
import * as path from 'path'
import { printNode } from '../generator/printNode'
import * as ts from 'typescript'
import { promises as fs } from 'fs'
import { createPropertyDefinition } from '../generator/factories'
import {
	ApiMethodInfo,
	OpenAPIv3Operation,
	createReturns,
} from '../generator/apiClientFactories'

const knownModules = {} as { [key: string]: string }

parseOpenAPI(
	path.join(process.cwd(), 'api-docs', 'v2.yaml'),
	path.join(process.cwd(), 'api-docs', 'corrections.yaml'),
)
	.then(async (f) => {
		const operations = Object.entries(
			f.paths as { [key: string]: { [key: string]: OpenAPIv3Operation } },
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
							requestBody: def.requestBody,
						},
					}),
					{},
				),
			}),
			{} as { [key: string]: ApiMethodInfo },
		)

		const deps: (string | { [key: string]: string })[] = []

		const functions = Object.entries(operations).map(([operationId, def]) => {
			const params = []
			const paramsRequired = def.parameters?.find(({ required }) => required)
			if (def.parameters) {
				params.push(
					ts.createParameter(
						undefined,
						undefined,
						undefined,
						'params',
						paramsRequired
							? undefined
							: ts.createToken(ts.SyntaxKind.QuestionToken),
						ts.createTypeLiteralNode(
							def.parameters?.map((param) => {
								const { type, deps: d } = createPropertyDefinition(
									param.schema,
									f.components.schemas,
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
									ts.createElementAccessChain(
										ts.createIdentifier('params'),
										paramsRequired
											? undefined
											: ts.createToken(ts.SyntaxKind.QuestionDotToken),
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
									ts.createElementAccessChain(
										ts.createIdentifier('params'),
										paramsRequired
											? undefined
											: ts.createToken(ts.SyntaxKind.QuestionDotToken),
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

			// Generate the returned types of the operation
			const { types: returns, deps: returnDeps, lifters } = createReturns(
				def,
				f.components.schemas,
			)
			deps.push(...returnDeps)

			const m = ts.createArrowFunction(
				undefined,
				undefined,
				params,
				undefined,
				undefined,
				// TODO: Implement support for different responses
				ts.createCall(ts.createIdentifier('pipe'), undefined, [
					ts.createCall(
						ts.createIdentifier('apiClient'),
						[ts.createUnionTypeNode(returns)],
						[ts.createObjectLiteral(apiClientArgumens)],
					),
					ts.createCall(ts.createIdentifier('map'), undefined, [lifters[0]]),
				]),
				//ts.createBlock([ts.createReturn(ts.createLiteral('foo'))]),
			)

			deps.push({
				pipe: 'fp-ts/lib/pipeable',
				map: 'fp-ts/lib/TaskEither',
			})

			return ts.createVariableStatement(
				undefined,
				ts.createVariableDeclarationList(
					[ts.createVariableDeclaration(operationId, undefined, m)],
					ts.NodeFlags.Const,
				),
			)
		})

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
							ts.createBlock(
								[
									...functions,
									ts.createReturn(
										ts.createObjectLiteral(
											Object.entries(operations).map(([operationId, def]) => {
												const p = ts.createShorthandPropertyAssignment(
													operationId,
												)
												const comment = []
												comment.push(def.summary)
												if (def.description) {
													comment.push('')
													comment.push(def.description.trim())
												}
												comment.push('')
												comment.push('Returns:')
												comment.push(
													Object.entries(def.responses).map(
														([httpStatusCode, { description }]) =>
															`- for status code ${httpStatusCode}: ${description}`,
													),
												)
												if (
													Object.values(def.responses).reduce(
														(numResponses, { content }) =>
															numResponses + Object.values(content).length,
														0,
													) > 1
												) {
													comment.push(
														'FIXME: Only the first response type is handled',
													)
												}
												if (def.requestBody) {
													comment.push('FIXME: Implement request body handling')
												}
												ts.addSyntheticLeadingComment(
													p,
													ts.SyntaxKind.MultiLineCommentTrivia,
													`*\n * ${comment.join('\n * ')} \n `,
													true,
												)
												return p
											}),
											true,
										),
									),
								],
								true,
							),
						),
					),
				],
				ts.NodeFlags.Const,
			),
		)

		// Write apiClient
		const uniqueDeps = deps.reduce((uniqueDeps, dep) => {
			if (typeof dep === 'object') {
				return {
					...(uniqueDeps as { [key: string]: string }),
					...(dep as object),
				}
			} else {
				return {
					...(uniqueDeps as { [key: string]: string }),
					[dep]: `./${dep}`,
				}
			}
		}, {} as { [key: string]: string })

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
			...Object.entries(uniqueDeps).map(([exp, mod]) =>
				ts.createImportDeclaration(
					undefined,
					undefined,
					ts.createImportClause(
						undefined,
						ts.createNamedImports([
							ts.createImportSpecifier(undefined, ts.createIdentifier(exp)),
						]),
					),
					ts.createLiteral(knownModules[mod] || mod),
				),
			),
			client,
		]
			.map(printNode)
			.join('\n')

		const comment = []
		comment.push('Auto-generated file. Do not change.')

		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'apiClient.ts'),
			[`/**\n * ${comment.join('\n * ')} \n */`, c].join('\n'),
			'utf8',
		)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
