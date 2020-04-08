import { createClient } from './createClient'

describe('API Client', () => {
	it('can be instantiated', () => {
		const client = createClient({ apiKey: 'some-api-key' })
		expect(client).toBeDefined()
	})
	it('sends the right headers', async () => {
		const fetchMock = jest.fn(() => ({
			status: 200,
			json: async () => ({
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
			}),
		}))
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})

		await client.listAllShipments()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/shipments',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer some-api-key',
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Flexport-Version': 2,
				},
			},
		)
	})
})
