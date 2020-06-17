import { Item, createObjectType, createPropertyDefinition } from './factories'
import * as ts from 'typescript'
import { Type } from '../generated'
import { capitalize } from './factories'

export type Responses = {
	[key: string]: {
		description: string
		content: {
			[key: string]: {
				schema: Item
			}
		}
	}
}

export type Parameters = {
	name: string
	description: string
	in: string
	required?: boolean
	schema: Item
}[]

export type OpenAPIv3Operation = {
	operationId: string
	summary: string
	description?: string
	tags?: string[]
	parameters?: Parameters
	responses: Responses
	requestBody?: Responses
}

export type ApiMethodInfo = {
	operationId: string
	summary: string
	description?: string
	method: string
	path: string
	parameters?: Parameters
	responses: Responses
	requestBody?: Responses
}

export const isPageResponse = (schema: Item) =>
	schema.properties?.data?.properties?._object?.example === Type.Page
export const isResponse = (schema: Item) =>
	schema.properties?._object?.example === Type.Response

export const createReturn = (
	schema: Item,
	objectName: string,
	schemas: { [key: string]: Item },
) => {
	// Response is binary
	if (schema.type === 'string' && schema.format === 'binary') {
		return {
			type: ts.createTypeReferenceNode('string', []),
			deps: [],
		}
	}
	// Response is paginated
	if (isPageResponse(schema)) {
		const ref = schema.properties?.data?.properties?.data?.items?.$ref
		let dep
		let t: ts.TypeNode = ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
		if (ref !== undefined) {
			dep = ref.replace(/#\/components\/schemas\//, '')
			t = ts.createTypeReferenceNode(dep, [])
		}
		return {
			type: ts.createTypeReferenceNode(`ApiPageObject`, [t]),
			deps: dep !== undefined ? [dep] : [],
		}
	}
	// Regular response
	if (isResponse(schema)) {
		const ref = schema.properties?.data?.$ref
		let dep
		let t: ts.TypeNode = ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
		if (ref !== undefined) {
			dep = ref.replace(/#\/components\/schemas\//, '')
			t = ts.createTypeReferenceNode(dep, [])
		}
		return {
			type: t,
			deps: dep !== undefined ? [dep] : [],
		}
	}
	// Object is returned (e.g. on updates)
	if (schema.$ref !== undefined) {
		const dep = schema.$ref.replace(/#\/components\/schemas\//, '')
		const t = ts.createTypeReferenceNode(dep, [])
		return {
			type: t,
			deps: dep !== undefined ? [dep] : [],
		}
	}
	// It's a regular object
	return createObjectType(objectName, schema, schemas)
}

const passLifter = ts.createArrowFunction(
	undefined,
	undefined,
	[
		ts.createParameter(
			undefined,
			undefined,
			undefined,
			ts.createIdentifier('res'),
			undefined,
		),
	],
	undefined,
	undefined,
	ts.createBlock([ts.createReturn(ts.createIdentifier('res'))]),
)

export const createLifterCall = (
	schema: Item,
): {
	lifter: ts.ArrowFunction | ts.CallExpression | ts.Identifier
	returns: ts.TypeReferenceNode
	deps: (string | { [key: string]: string })[]
} => {
	// Response is paginated
	if (isPageResponse(schema)) {
		const ref = schema.properties?.data?.properties?.data?.items?.$ref
		if (ref !== undefined) {
			const dep = ref.replace(/#\/components\/schemas\//, '')
			return {
				lifter: ts.createCall(
					ts.createIdentifier('toPage'),
					[
						ts.createTypeReferenceNode(dep, []),
						ts.createTypeReferenceNode(`Lifted${dep}`, []),
					],
					[ts.createIdentifier(`lift${dep}`)],
				),
				returns: ts.createTypeReferenceNode('Page', [
					ts.createTypeReferenceNode(`Lifted${dep}`, []),
				]),
				deps: [
					{ ['toPage']: '../toPage' },
					dep,
					{ [`Lifted${dep}`]: `./${dep}` },
					{ [`lift${dep}`]: `./${dep}` },
				],
			}
		}
		return {
			lifter: passLifter,
			returns: ts.createTypeReferenceNode('any', []), // FIXME: convert to proper type
			deps: [],
		}
	}
	// Regular response
	if (isResponse(schema)) {
		const ref = schema.properties?.data?.$ref
		if (ref !== undefined) {
			const dep = ref.replace(/#\/components\/schemas\//, '')
			return {
				lifter: ts.createIdentifier(`lift${dep}`),
				returns: ts.createTypeReferenceNode(`Lifted${dep}`, []),
				deps: [
					dep,
					{ [`lift${dep}`]: `./${dep}` },
					{ [`Lifted${dep}`]: `./${dep}` },
				],
			}
		}
		return {
			lifter: passLifter,
			returns: ts.createTypeReferenceNode('any', []), // FIXME: convert to proper type
			deps: [],
		}
	}
	// Object is returned (e.g. on updates)
	if (schema.$ref !== undefined) {
		const dep = schema.$ref.replace(/#\/components\/schemas\//, '')
		return {
			lifter: ts.createIdentifier(`lift${dep}`),
			returns: ts.createTypeReferenceNode(`Lifted${dep}`, []),
			deps: [
				dep,
				{ [`lift${dep}`]: `./${dep}` },
				{ [`Lifted${dep}`]: `./${dep}` },
			],
		}
	}
	// It's a regular object, or binary: return as is
	return {
		lifter: passLifter,
		returns: ts.createTypeReferenceNode('any', []), // FIXME: convert to proper type
		deps: [],
	}
}

export const createReturns = (
	def: ApiMethodInfo,
	schemas: { [key: string]: Item },
) => {
	const r = Object.entries(def.responses)
		.map(([httpStatusCode, { content }]) =>
			Object.entries(content).map(([contentType, { schema }]) =>
				createReturn(
					schema,
					`${def.operationId}HTTP${httpStatusCode}${contentType}Response`,
					schemas,
				),
			),
		)
		.flat()

	const l = Object.values(def.responses)
		.map(({ content }) =>
			Object.values(content).map(({ schema }) => createLifterCall(schema)),
		)
		.flat()

	return {
		deps: [
			...r.map(({ deps }) => deps).flat(),
			...l.map(({ deps }) => deps).flat(),
		],
		types: r.map(({ type }) => type).flat(),
		lifters: l.map(({ lifter }) => lifter).flat(),
	}
}

export const commentOperation = (p: ts.Node, def: ApiMethodInfo) => {
	const comment = []
	comment.push(def.summary)
	if (def.description !== undefined) {
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
		comment.push('FIXME: Only the first response type is handled')
	}
	if (def.requestBody !== undefined) {
		comment.push('FIXME: Implement request body handling')
	}
	ts.addSyntheticLeadingComment(
		p,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)
}

export const generateParams = (schemas: any, def: ApiMethodInfo) => {
	const params = []
	const deps: (string | { [key: string]: string })[] = []
	const enums: ts.EnumDeclaration[] = []
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
						const { type, deps: d, enums: e } = createPropertyDefinition(
							param.schema,
							schemas,
							`${def.operationId
								.split('_')
								.map(capitalize)
								.join('')}${capitalize(param.name.replace(/^f\./, ''))}`,
						)
						deps.push(...d)
						enums.push(...e)
						return ts.createPropertySignature(
							[],
							ts.createComputedPropertyName(ts.createStringLiteral(param.name)),
							param.required === true
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

	const pathParams = def.parameters?.filter(({ in: i }) => i === 'path') ?? []
	const queryParams = def.parameters?.filter(({ in: i }) => i === 'query') ?? []
	const paramProperties = []
	if (pathParams.length > 0) {
		paramProperties.push(
			ts.createPropertyAssignment(
				'path',
				ts.createObjectLiteral(
					pathParams.map((param) =>
						ts.createPropertyAssignment(
							ts.createComputedPropertyName(ts.createStringLiteral(param.name)),
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
	if (queryParams.length > 0) {
		paramProperties.push(
			ts.createPropertyAssignment(
				'query',
				ts.createObjectLiteral(
					queryParams.map((param) =>
						ts.createPropertyAssignment(
							ts.createComputedPropertyName(ts.createStringLiteral(param.name)),
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
	return {
		params,
		deps,
		paramProperties,
		enums,
	}
}

export const createOperationCall = (schemas: any, def: ApiMethodInfo) => {
	const deps: (string | { [key: string]: string })[] = []
	const enums: ts.EnumDeclaration[] = []
	const {
		params,
		paramProperties,
		deps: paramDeps,
		enums: paramEnums,
	} = generateParams(schemas, def)
	deps.push(...paramDeps)
	enums.push(...paramEnums)

	const apiClientArgumens = [
		ts.createPropertyAssignment(
			'method',
			ts.createStringLiteral(def.method.toUpperCase()),
		),
		ts.createPropertyAssignment('path', ts.createStringLiteral(def.path)),
	]
	const pathParams = def.parameters?.filter(({ in: i }) => i === 'path') ?? []
	const queryParams = def.parameters?.filter(({ in: i }) => i === 'query') ?? []
	if (queryParams.length + pathParams.length > 0) {
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
		schemas,
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

	return {
		method: m,
		deps,
		enums,
	}
}

export const commentClientInstanceType = (
	clientInstanceType: ts.TypeAliasDeclaration,
) => {
	const comment = [
		'Generated API client for the Flexport v2 API',
		'',
		'This client is auto-generated from the OpenAPI documentation published by Flexport, with some corrections.',
		'',
		'@see https://api.flexport.com/docs/v2/flexport',
	]
	ts.addSyntheticLeadingComment(
		clientInstanceType,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)
}
