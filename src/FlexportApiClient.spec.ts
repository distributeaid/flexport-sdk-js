import { v2Client } from './FlexportApiClient'
import { requestHandler } from '@distributeaid/flexport-api-sandbox'
import * as http from 'http'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'

const port = 3000
const hostname = `http://0.0.0.0:${port}`

describe('FlexportApiClient', () => {
	let server: http.Server
	beforeAll(() => {
		server = http.createServer(requestHandler(hostname))
		server.listen(port)
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
		expect.assertions(1)
		return pipe(
			client.shipment_index(),
			TE.map((shipments) => {
				expect(shipments.items).toHaveLength(10)
			}),
		)()
	})
})
