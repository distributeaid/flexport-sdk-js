import * as fetchPonyfill from 'fetch-ponyfill'
import { flexportApiV2 } from './generated/apiClient'
import { headers } from './headers'

const { fetch } = fetchPonyfill()

export type FlexportApiClient = <A>(args: {
	path: string
	method: 'GET' | 'POST' | 'PATCH'
	params?: {
		path?: { [key: string]: any }
		query?: { [key: string]: any }
	}
}) => A

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
	const clientImplementation: FlexportApiClient = ({
		path,
		method,
		params,
	}) => {
		const url = `${e}${path}`
		// TODO: replace path parameters
		return (fetchImplementation || fetch)(url, {
			method,
			headers: headers({ apiKey }),
			query: params?.query,
		}).then(async (res: any) => res.json())
	}
	return flexportApiV2(clientImplementation)
}
