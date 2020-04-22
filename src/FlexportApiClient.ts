export type FlexportApiClient = <A>(args: {
	path: string
	method: 'GET' | 'POST' | 'PATCH'
	params?: {
		path?: { [key: string]: any }
		query?: { [key: string]: any }
	}
}) => A
