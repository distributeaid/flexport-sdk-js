export type FlexportApiClient = (args: {
	path: string
	method: 'GET' | 'POST' | 'PATCH'
	params?: {
		path?: { [key: string]: any }
		query?: { [key: string]: any }
	}
}) => void
