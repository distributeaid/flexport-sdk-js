import { createClient, Client } from '../'

describe('API Client', () => {
	let client: Client
	it('can be instantiated', () => {
		client = createClient({ apiKey: 'some-api-key' })
		expect(client).toBeDefined()
	})
})
