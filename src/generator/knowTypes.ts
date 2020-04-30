export const ApiTypes = {
	CollectionRef: '/api/refs/collection',
	ObjectRef: '/api/refs/object',
	Error: '/api/error',
	Page: '/api/collections/paginated',
	Response: '/api/response',
} as const

export const TypesById = Object.entries(ApiTypes).reduce(
	(t, [k, v]) => ({ ...t, [v]: k }),
	{} as { [key: string]: string },
)
