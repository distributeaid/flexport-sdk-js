import { ApiResponseObject } from './types/ApiResponseObject'
import { ApiObject } from './types/ApiObject'
import * as fetchPonyfill from 'fetch-ponyfill'
import { Page } from './types/Page'
import { headers } from './headers'
import {
	transformPaginatedResponse,
	transformResponse,
} from './transformer/transform'
import { ResolvableObject, ResolvableCollection, ResolvablePage } from './types'
import { Either } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { createError, ErrorInfo } from './types/ErrorInfo'
import { LiftedShipment, Shipment, liftShipment } from './generated'
import { TypedApiObject } from './types/TypedApiObject'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	getShipment: (id: string | number) => TE.TaskEither<ErrorInfo, LiftedShipment>
	listAllShipments: () => TE.TaskEither<ErrorInfo, Page<LiftedShipment>>
	resolveCollectionRef: <A extends ApiObject, O extends TypedApiObject>(
		transform: (apiResponseObject: A) => O,
	) => (link: ResolvableCollection) => TE.TaskEither<ErrorInfo, Page<O>>
	resolvePageRef: <A extends ApiObject, O extends TypedApiObject>(
		transform: (apiResponseObject: A) => O,
	) => (link: ResolvablePage) => TE.TaskEither<ErrorInfo, Page<O>>
	resolveObjectRef: <O extends TypedApiObject>() => (
		link: ResolvableObject,
	) => TE.TaskEither<ErrorInfo, O>
}

const fetchJSON = <A extends ApiObject>(fn: () => Promise<typeof Response>) =>
	TE.tryCatch<ErrorInfo, ApiResponseObject<A>>(
		async () => fn().then(async (res) => res.json()),
		(reason) => createError((reason as Error).message),
	)

const get = <A extends ApiObject, L>({
	headers,
	fetchImplementation,
	responseTransformer,
	url,
}: {
	url: string
	headers: object
	responseTransformer: (r: ApiResponseObject<A>) => Either<ErrorInfo, L>
	fetchImplementation?: typeof fetch
}) =>
	pipe(
		fetchJSON<A>(() =>
			(fetchImplementation || fetch)(url, {
				method: 'GET',
				headers,
			}),
		),
		TE.map((r) => responseTransformer(r)),
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
	const authorizedGet = <A extends ApiObject, L>(
		resource: string,
		responseTransformer: (r: ApiResponseObject<A>) => Either<ErrorInfo, L>,
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
			authorizedGet(`shipments/${id}`, transformResponse<LiftedShipment>()),
		listAllShipments: () =>
			authorizedGet(
				'shipments',
				transformPaginatedResponse<Shipment, LiftedShipment>(liftShipment),
			),
		resolveCollectionRef: <A extends ApiObject, O extends TypedApiObject>(
			transform: (apiResponseObject: A) => O,
		) => (link: ResolvableCollection) =>
			authorizedGet(link.link, transformPaginatedResponse<A, O>(transform)),
		resolvePageRef: <A extends ApiObject, O extends TypedApiObject>(
			transform: (apiResponseObject: A) => O,
		) => (link: ResolvablePage) =>
			authorizedGet(link.link, transformPaginatedResponse<A, O>(transform)),
		resolveObjectRef: <A extends ApiObject>() => (link: ResolvableObject) =>
			authorizedGet(link.link, transformResponse<A>()),
	}
}
