import { ApiResponseObject } from './types/ApiResponseObject'
import { Shipment } from './types/Shipment'
import * as fetchPonyfill from 'fetch-ponyfill'
import { Page } from './types/Page'
import { headers } from './headers'

const { fetch, Response } = fetchPonyfill()

export type Client = {
	listAllShipments: () => Promise<Page<Shipment>>
}

const handleResponse = async <A extends ApiResponseObject>(
	r: Promise<typeof Response>,
): Promise<A> => {
	const res = await r
	if (res.status >= 400) {
		if (
			res.headers?.get('content-length') &&
			res.headers?.get('content-type')?.includes('application/json')
		) {
			return res.json()
		}
		throw new Error(`${res.status} ${await res.text()}`.trim())
	}
	return res.json()
}

const get = <A extends ApiResponseObject>({
	endpoint,
	headers,
	fetchImplementation,
}: {
	endpoint: string
	headers: object
	fetchImplementation?: any
}) => async (resource: string): Promise<A> =>
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
	const authorizedGet = <A extends ApiResponseObject>(
		resource: string,
	) => async () =>
		get<A>({
			headers: headers({ apiKey }),
			endpoint: endpoint?.replace(/\/$/, '') || 'https://api.flexport.com',
			fetchImplementation,
		})(resource)
	return {
		listAllShipments: authorizedGet<Page<Shipment>>('shipments'),
	}
}
