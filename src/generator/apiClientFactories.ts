import { Item, createObjectType } from './factories'
import * as ts from 'typescript'
import { Type } from '../generated'

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
}

export type ApiMethodInfo = {
	operationId: string
	summary: string
	description?: string
	method: string
	path: string
	parameters?: Parameters
	responses: Responses
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
		if (ref) {
			dep = ref.replace(/#\/components\/schemas\//, '')
			t = ts.createTypeReferenceNode(dep, [])
		}
		return {
			type: ts.createTypeReferenceNode(`ApiPageObject`, [t]),
			deps: dep ? [dep] : [],
		}
	}
	// Regular response
	if (isResponse(schema)) {
		const ref = schema.properties?.data?.$ref
		let dep
		let t: ts.TypeNode = ts.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword)
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
	// It's a regular object
	return createObjectType(objectName, schema, schemas)
}

export const createLifterCall = (
	schema: Item,
	contentType: string,
	httpStatusCode: number,
) => {
	// Response is binary  return as is
	if (schema.type === 'string' && schema.format === 'binary') {
	}
	// Response is paginated
	if (isPageResponse(schema)) {
		const ref = schema.properties?.data?.properties?.data?.items?.$ref
		if (ref) {
			const dep = ref.replace(/#\/components\/schemas\//, '')
			return {
				lifter: ts.createCall(
					ts.createIdentifier('toPage'),
					[
						ts.createTypeReferenceNode(dep, []),
						ts.createTypeReferenceNode(`Lifted${dep}`, []),
					],
					[ts.createIdentifier('response'), ts.createIdentifier(`lift${dep}`)],
				),
				deps: [
					{ ['toPage']: '../types/Page' },
					dep,
					{ [`Lifted${dep}`]: dep },
					{ [`lift${dep}`]: dep },
				],
			}
		}
		return {
			lifter: ts.createReturn(ts.createIdentifier('response')),
			deps: [],
		}
	}
	// Regular response
	if (isResponse(schema)) {
		const ref = schema.properties?.data?.$ref
		if (ref) {
			const dep = ref.replace(/#\/components\/schemas\//, '')
			return {
				lifter: ts.createCall(ts.createIdentifier(`lift${dep}`), undefined, [
					ts.createIdentifier('response'),
				]),
				deps: [dep, { [`lift${dep}`]: dep }],
			}
		}
		return {
			lifter: ts.createReturn(ts.createIdentifier('response')),
			deps: [],
		}
	}
	// Object is returned (e.g. on updates)
	if (schema.$ref) {
		const dep = schema.$ref.replace(/#\/components\/schemas\//, '')
		return {
			lifter: ts.createCall(ts.createIdentifier(`lift${dep}`), undefined, [
				ts.createIdentifier('response'),
			]),
			deps: [dep, { [`lift${dep}`]: dep }],
		}
	}
	// It's a regular object
	return {
		lifter: ts.createReturn(ts.createIdentifier('response')),
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

	const l = Object.entries(def.responses)
		.map(([httpStatusCode, { content }]) =>
			Object.entries(content).map(([contentType, { schema }]) =>
				createLifterCall(schema, contentType, parseInt(httpStatusCode, 10)),
			),
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
