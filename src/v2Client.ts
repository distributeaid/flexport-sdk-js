import * as fetchPonyfill from 'fetch-ponyfill'
import { flexportApiV2 } from './generated/apiClient'
import { headers } from './headers'
import * as TE from 'fp-ts/lib/TaskEither'
import { ErrorInfo, createError } from './types/ErrorInfo'
import { ClientImplementationArgs, ClientImplementation } from './types/Client'
import {
	ResolvablePage,
	ApiObject,
	ResolvableCollection,
	ResolvableObject,
	ApiResponseObject,
} from './types'
import { pipe } from 'fp-ts/lib/pipeable'
import { TypedApiObject } from './types/TypedApiObject'
import { ApiPageObject } from './types/ApiPageObject'
import { toPage } from './toPage'
import { Type } from './generated'

const { fetch } = fetchPonyfill()

export const v2Client = ({
	apiKey,
	endpoint,
	fetchImplementation,
}: {
	apiKey: string
	endpoint?: string
	fetchImplementation?: typeof fetch
}) => {
	const e = endpoint?.replace(/\/$/, '') || 'https://api.flexport.com'
	const fetchClient: ClientImplementation = <A>({
		path,
		method,
		params,
	}: ClientImplementationArgs) => {
		const replacedPath = Object.entries(params?.path ?? {}).reduce(
			(replacedPath, [k, v]) =>
				replacedPath
					.replace(`{${k}}`, encodeURIComponent(v))
					.replace(`:${k}`, encodeURIComponent(v)),
			path,
		)
		const url = path.startsWith('http') ? path : `${e}${replacedPath}`
		return TE.tryCatch<ErrorInfo, A>(
			() => {
				const args = {
					method,
					headers: headers({ apiKey }),
				} as any

				const query = Object.entries(params?.query ?? {}).reduce(
					(q, [k, v]) => {
						if (v !== undefined)
							return {
								...q,
								[k]: v,
							}
						return q
					},
					{},
				)
				if (Object.keys(query).length) {
					args.query = query
				}
				return (fetchImplementation || fetch)(url, args).then(
					async (res: any) => {
						if (res.status >= 400) {
							return res.text().then((text: string) => {
								throw new Error(
									`Encountered error ${res.status} when ${method}ing ${url}${
										text && `: ${text}`
									}!`,
								)
							})
						}
						if (res.headers.get('content-type').startsWith('application/json'))
							return res.json().then((res: ApiResponseObject<A>) => {
								if (!res) throw new Error('Empty response received')
								const { _object, version, error, data } = res
								if (_object !== Type.Response)
									throw new Error(
										`Expected "${Type.Response}", received: "${_object}"!`,
									)
								if (version !== 2) {
									throw new Error(`Expected version 2, received: ${version}!`)
								}
								if (error) {
									throw new Error(
										`API returned an error: ${error.message} (${error.code})`,
									)
								}
								return data
							})
						return res.text()
					},
				)
			},
			(err) => createError((err as Error).message),
		)
	}
	return {
		...flexportApiV2(fetchClient),
		resolvePage: <A extends ApiObject, O extends TypedApiObject>(
			transform: (apiResponseObject: A) => O,
		) => (page: ResolvablePage) =>
			pipe(
				fetchClient<ApiPageObject<A>>({
					method: 'GET',
					path: page.link,
				}),
				TE.map(toPage(transform)),
			),
		resolveCollection: <A extends ApiObject, O extends TypedApiObject>(
			transform: (apiResponseObject: A) => O,
		) => (collection: ResolvableCollection) =>
			pipe(
				fetchClient<ApiPageObject<A>>({
					method: 'GET',
					path: collection.link,
				}),
				TE.map(toPage(transform)),
			),
		resolveObject: <A extends ApiObject, O extends TypedApiObject>(
			transform: (apiResponseObject: A) => O,
		) => (object: ResolvableObject) =>
			pipe(
				fetchClient<A>({
					method: 'GET',
					path: object.link,
				}),
				TE.map(transform),
			),
	}
}
