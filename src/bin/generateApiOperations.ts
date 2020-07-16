import { parseOpenAPI } from '../generator/parseOpenAPI'
import * as path from 'path'
import { printNode } from '../generator/printNode'
import * as ts from 'typescript'
import { promises as fs } from 'fs'
import { makeImport } from '../generator/factories'
import {
	ApiMethodInfo,
	OpenAPIv3Operation,
	createOperationCall,
	commentOperation,
	commentClientInstanceType,
	generateParams,
	createLifterCall,
} from '../generator/apiClientFactories'
import { uniqueDeps } from '../generator/uniqueDeps'

const API_CLIENT_TYPE = 'FlexportApiV2ClientInstance'

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
							operationId: def.operationId,
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

		// Create the return type of the client function

		const deps: (string | { [key: string]: string })[] = []
		const enums: ts.EnumDeclaration[] = []

		deps.push({
			TaskEither: 'fp-ts/lib/TaskEither',
			ErrorInfo: '../types/ErrorInfo',
			Page: '../types/Page',
		})
		const clientInstanceType = ts.createTypeAliasDeclaration(
			undefined,
			[ts.createToken(ts.SyntaxKind.ExportKeyword)],
			API_CLIENT_TYPE,
			undefined,
			ts.createTypeLiteralNode(
				Object.entries(operations).map(([operationId, def]) => {
					const { params } = generateParams(f.components.schemas, def)
					const lifters = Object.values(def.responses)
						.map(({ content }) => Object.values(content))
						.flat()
						.map(({ schema }) => createLifterCall(schema))

					deps.push(...lifters.map(({ deps }) => deps).flat())

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
								lifters[0].returns,
							]),
						),
						undefined,
					)
					commentOperation(p, def)
					return p
				}),
			),
		)

		commentClientInstanceType(clientInstanceType)

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
							ts.createTypeReferenceNode(API_CLIENT_TYPE, []),
							undefined,
							ts.createBlock(
								[
									ts.createReturn(
										ts.createObjectLiteral(
											Object.entries(operations).map(([operationId, def]) => {
												const {
													method,
													deps: methodDeps,
													enums: methodEnums,
												} = createOperationCall(
													API_CLIENT_TYPE,
													operationId,
													f.components.schemas,
													def,
												)
												const a = ts.createPropertyAssignment(
													operationId,
													method,
												)
												deps.push(...methodDeps)
												enums.push(...methodEnums)
												return a
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
			...enums,
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
