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
}: {
	endpoint: string
	headers: object
}) => async (resource: string): Promise<A> =>
	handleResponse(
		fetch(`${endpoint}/api/${resource}`, {
			method: 'GET',
			headers,
		}),
	)

export const createClient = ({
	apiKey,
	endpoint,
}: {
	apiKey: string
	endpoint?: string
}): Client => {
	const authorizedGet = <A extends ApiResponseObject>(resource: string) => () =>
		get<A>({
			headers: headers({ apiKey }),
			endpoint: endpoint?.replace(/\/$/, '') || 'https://api.flexport.com',
		})(resource)
	return {
		listAllShipments: authorizedGet<Page<Shipment>>('shipments'),
	}
}
