import { ApiResponseObject } from './types/ApiResponseObject'
import { ApiObject } from './types/ApiObject'
import { Shipment } from './types/Shipment'
import * as fetchPonyfill from 'fetch-ponyfill'
import { Page } from './types/Page'
import { headers } from './headers'
import {
	transformPaginatedResponse,
	transformResponse,
} from './transformer/transform'
import { ApiError, createError } from './types'
import { Either } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	listAllShipments: () => TE.TaskEither<ApiError, Page<Shipment>>
	resolveCollectionRef: <A extends ApiObject>(
		link: string,
	) => TE.TaskEither<ApiError, Page<A>>
	resolveObjectRef: <A extends ApiObject>(
		link: string,
	) => TE.TaskEither<ApiError, A>
}

const fetchJSON = (fn: () => Promise<typeof Response>) =>
	TE.tryCatch<ApiError, ApiResponseObject>(
		() => fn().then(async res => res.json()),
		reason => createError((reason as Error).message),
	)

const get = <A extends ApiObject>({
	headers,
	fetchImplementation,
	responseTransformer,
}: {
	headers: object
	responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>
	fetchImplementation?: any
}) => (url: string) =>
	pipe(
		fetchJSON(() =>
			(fetchImplementation || fetch)(url, {
				method: 'GET',
				headers,
			}),
		),
		TE.map(r => responseTransformer(r)),
		TE.map(TE.fromEither),
		TE.flatten,
	)

export const createClient = ({
	apiKey,
	endpoint,
	fetchImplementation,
}: {
	apiKey: string
	endpoint?: string
	fetchImplementation?: any
}): Client => {
	const authorizedGet = <A extends ApiObject>(
		resource: string,
		responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>,
	) => {
		const e = endpoint?.replace(/\/$/, '') || 'https://api.flexport.com'
		const url = resource.startsWith('http') ? resource : `${e}/${resource}`
		return get({
			headers: headers({ apiKey }),
			fetchImplementation,
			responseTransformer,
		})(url)
	}
	return {
		listAllShipments: () =>
			authorizedGet('shipments', transformPaginatedResponse<Shipment>()),
		resolveCollectionRef: <A extends ApiObject>(link: string) =>
			authorizedGet(link, transformPaginatedResponse<A>()),
		resolveObjectRef: <A extends ApiObject>(link: string) =>
			authorizedGet(link, transformResponse<A>()),
	}
}
