import * as fetchPonyfill from 'fetch-ponyfill'
import { flexportApiV2 } from './generated/apiClient'
import { headers } from './headers'
import * as TE from 'fp-ts/lib/TaskEither'
import { ErrorInfo, createError } from './types/ErrorInfo'
import { ClientImplementationArgs, ClientImplementation } from './types/Client'
import {
	ResolvablePage,
	toPage,
	ApiObject,
	ResolvableCollection,
	ResolvableObject,
} from './types'
import { pipe } from 'fp-ts/lib/pipeable'
import { TypedApiObject } from './types/TypedApiObject'
import { ApiPageObject } from './types/ApiPageObject'

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
		// FIXME: replace path parameters
		// FIXME: Handle errors
		const url = path.startsWith('http') ? path : `${e}${path}`
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
				return (fetchImplementation || fetch)(url, args)
					.then(async (res: any) => res.json())
					.then((res: any) => res.data)
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
