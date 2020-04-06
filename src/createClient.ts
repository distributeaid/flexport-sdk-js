import { ApiResponseObject } from './types/ApiResponseObject'
import { ApiObject } from './types/ApiObject'
import { Shipment } from './types/Shipment'
import * as fetchPonyfill from 'fetch-ponyfill'
import { Page } from './types/Page'
import { headers } from './headers'
import { transformResponse } from './transformer/transform'
import { ApiError } from './types'
import { Either } from 'fp-ts/lib/Either'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	listAllShipments: () => Promise<Either<ApiError, Page<Shipment>>>
}

const handleResponse = async <A extends ApiObject>(
	r: Promise<typeof Response>,
): Promise<Either<ApiError, A>> => {
	const res = await r
	const d: ApiResponseObject = await res.json()
	return transformResponse<A>(d as ApiResponseObject)
}

const get = <A extends ApiObject>({
	endpoint,
	headers,
	fetchImplementation,
}: {
	endpoint: string
	headers: object
	fetchImplementation?: any
}) => async (resource: string): Promise<Either<ApiError, A>> =>
	handleResponse(
		(fetchImplementation || fetch)(`${endpoint}/${resource}`, {
			method: 'GET',
			headers,
		}),
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
	const authorizedGet = <A extends ApiObject>(resource: string) => async () =>
		get<A>({
			headers: headers({ apiKey }),
			endpoint: endpoint?.replace(/\/$/, '') || 'https://api.flexport.com',
			fetchImplementation,
		})(resource)
	return {
		listAllShipments: authorizedGet<Page<Shipment>>('shipments'),
	}
}
