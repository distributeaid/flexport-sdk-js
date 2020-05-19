import { parseOpenAPI } from '../generator/parseOpenAPI'
import * as path from 'path'
import { printNode } from '../generator/printNode'
import * as ts from 'typescript'
import { promises as fs } from 'fs'
import { createPropertyDefinition, makeImport } from '../generator/factories'
import {
	ApiMethodInfo,
	OpenAPIv3Operation,
	createReturns,
	commentOperation,
	generateParams,
} from '../generator/apiClientFactories'
import { uniqueDeps } from '../generator/uniqueDeps'

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
			const { params, paramProperties, deps: paramDeps } = generateParams(
				f.components.schemas,
				def,
			)
			deps.push(...paramDeps)

			const apiClientArgumens = [
				ts.createPropertyAssignment(
					'method',
					ts.createStringLiteral(def.method.toUpperCase()),
				),
				ts.createPropertyAssignment('path', ts.createStringLiteral(def.path)),
			]
			const pathParams = def.parameters?.filter(({ in: i }) => i === 'path')
			const queryParams = def.parameters?.filter(({ in: i }) => i === 'query')
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

		// Create the return type of the client function

		deps.push({
			TaskEither: 'fp-ts/lib/TaskEither',
			ErrorInfo: '../types/ErrorInfo',
		})
		const clientInstanceType = ts.createTypeAliasDeclaration(
			undefined,
			[ts.createToken(ts.SyntaxKind.ExportKeyword)],
			'FlexportApiV2ClientInstance',
			undefined,
			ts.createTypeLiteralNode(
				Object.entries(operations).map(([operationId, def]) => {
					const { lifters } = createReturns(def, f.components.schemas)
					const { params, paramProperties } = generateParams(
						f.components.schemas,
						def,
					)
					const p = ts.createPropertySignature(
						[],
						operationId,
						undefined,
						ts.createFunctionTypeNode(
							[],
							params,
							ts.createTypeReferenceNode('TaskEither', [
								ts.createTypeReferenceNode('ErrorInfo', []),
								// TODO: Implement support for different responses
								ts.createTypeReferenceNode('any', []),
							]),
						),
						undefined,
					)
					commentOperation(p, def)
					return p
				}),
			),
		)

		// Create the client
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
									ts.createTypeReferenceNode('ClientImplementation', []),
								),
							],
							ts.createTypeReferenceNode('FlexportApiV2ClientInstance', []),
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
												commentOperation(p, def)
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
		const c = [
			ts.createImportDeclaration(
				undefined,
				undefined,
				ts.createImportClause(
					undefined,
					ts.createNamedImports([
						ts.createImportSpecifier(
							undefined,
							ts.createIdentifier('ClientImplementation'),
						),
					]),
				),
				ts.createLiteral('../types/Client'),
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
			...Object.entries(uniqueDeps(deps)).map(makeImport),
			clientInstanceType,
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
