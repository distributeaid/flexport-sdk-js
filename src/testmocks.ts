const emptyPage = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/shipments?page=1&per=20&sort=id&direction=desc',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		data: null,
	},
	error: null,
}

export const mockHeaders = () => {
	const h = new Map()
	h.set('content-type', 'application/json; charset=utf-8')
	return h
}

export const emptyPageMock = () =>
	jest.fn(async () =>
		Promise.resolve({
			status: 200,
			headers: mockHeaders(),
			json: async () => emptyPage,
		}),
	)
