import * as fetchPonyfill from 'fetch-ponyfill'
import { flexportApiV2 } from './generated/apiClient'
import { headers } from './headers'
import * as TE from 'fp-ts/lib/TaskEither'
import { ErrorInfo, createError } from './types/ErrorInfo'

const { fetch } = fetchPonyfill()

export type FlexportApiClientArgs = {
	path: string
	method: 'GET' | 'POST' | 'PATCH'
	params?: {
		path?: { [key: string]: any }
		query?: { [key: string]: any }
	}
}
export type FlexportApiClient = <A>(
	args: FlexportApiClientArgs,
) => TE.TaskEither<ErrorInfo, A>

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
	const clientImplementation: FlexportApiClient = <A>({
		path,
		method,
		params,
	}: FlexportApiClientArgs) => {
		// FIXME: replace path parameters
		// FIXME: Handle errors
		const url = `${e}${path}`
		return TE.tryCatch<ErrorInfo, A>(
			() =>
				(fetchImplementation || fetch)(url, {
					method,
					headers: headers({ apiKey }),
					query: params?.query,
				})
					.then(async (res: any) => res.json())
					.then((res: any) => res.data),
			(err) => createError((err as Error).message),
		)
	}
	return flexportApiV2(clientImplementation)
}
