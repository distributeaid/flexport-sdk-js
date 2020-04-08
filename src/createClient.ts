import { ApiResponseObject } from './types/ApiResponseObject'
import { ApiObject } from './types/ApiObject'
import { Shipment } from './types/Shipment'
import * as fetchPonyfill from 'fetch-ponyfill'
import { Page } from './types/Page'
import { headers } from './headers'
import { transformPaginatedResponse } from './transformer/transform'
import { ApiError } from './types'
import { Either } from 'fp-ts/lib/Either'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	listAllShipments: () => Promise<Either<ApiError, Page<Shipment>>>
}

const handleResponse = async <A extends ApiObject>(
	r: Promise<typeof Response>,
	responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>,
) => {
	const res = await r
	const d: ApiResponseObject = await res.json()
	return responseTransformer(d)
}

const get = <A extends ApiObject>({
	endpoint,
	headers,
	fetchImplementation,
	responseTransformer,
}: {
	endpoint: string
	headers: object
	responseTransformer: (r: ApiResponseObject) => Either<ApiError, A>
	fetchImplementation?: any
}) => async (resource: string) =>
	handleResponse(
		(fetchImplementation || fetch)(`${endpoint}/${resource}`, {
			method: 'GET',
			headers,
		}),
		responseTransformer,
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
	) => async () =>
		get({
			headers: headers({ apiKey }),
			endpoint: endpoint?.replace(/\/$/, '') || 'https://api.flexport.com',
			fetchImplementation,
			responseTransformer,
		})(resource)
	return {
		listAllShipments: authorizedGet(
			'shipments',
			transformPaginatedResponse<Shipment>(),
		),
	}
}
