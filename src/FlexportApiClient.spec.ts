import { v2Client } from './FlexportApiClient'
import { requestHandler } from '@distributeaid/flexport-api-sandbox'
import * as http from 'http'

const port = 3000
const hostname = `http://0.0.0.0:${port}`

describe('FlexportApiClient', () => {
	let server: http.Server
	beforeAll(() => {
		server = http.createServer(requestHandler(hostname))
		server.listen(port, () => {
			console.debug('[Flexport API Sandbox]', `is listening on ${hostname}`)
		})
	})
	afterAll(() => {
		server.close()
	})
	it('can be created', () => {
		const client = v2Client({
			apiKey: 'foo',
			endpoint: hostname,
		})
		expect(client).toBeDefined()
	})
	it('can fetch shipments', async () => {
		const client = v2Client({
			apiKey: 'foo',
			endpoint: hostname,
		})
		const shipments = await client.shipment_index()
		expect(shipments.data).toHaveLength(10)
	})
})
