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
import {
	ApiError,
	createError,
	ResolvableObject,
	ResolvableCollection,
} from './types'
import { Either } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	getShipment: (id: string | number) => TE.TaskEither<ApiError, Shipment>
	listAllShipments: () => TE.TaskEither<ApiError, Page<Shipment>>
	resolveCollectionRef: <A extends ApiObject>(
		link: ResolvableCollection,
	) => TE.TaskEither<ApiError, Page<A>>
	resolveObjectRef: <A extends ApiObject>(
		link: ResolvableObject,
	) => TE.TaskEither<ApiError, A>
}

const fetchJSON = (fn: () => Promise<typeof Response>) =>
	TE.tryCatch<ApiError, ApiResponseObject>(
		async () => fn().then(async res => res.json()),
		reason => createError((reason as Error).message),
	)

const get = <A extends ApiObject>({
	headers,
	fetchImplementation,
	responseTransformer,
	url,
}: {
	url: string
	headers: object
	responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>
	fetchImplementation?: typeof fetch
}) =>
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
	fetchImplementation?: typeof fetch
}): Client => {
	const authorizedGet = <A extends ApiObject>(
		resource: string,
		responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>,
	) => {
		const e = endpoint?.replace(/\/$/, '') || 'https://api.flexport.com'
		const url = resource.startsWith('http') ? resource : `${e}/${resource}`
		return get({
			url,
			headers: headers({ apiKey }),
			fetchImplementation,
			responseTransformer,
		})
	}
	return {
		getShipment: (id: string | number) =>
			authorizedGet(`shipments/${id}`, transformResponse<Shipment>()),
		listAllShipments: () =>
			authorizedGet('shipments', transformPaginatedResponse<Shipment>()),
		resolveCollectionRef: <A extends ApiObject>(link: ResolvableCollection) =>
			authorizedGet(link.link, transformPaginatedResponse<A>()),
		resolveObjectRef: <A extends ApiObject>(link: ResolvableObject) =>
			authorizedGet(link.link, transformResponse<A>()),
	}
}
