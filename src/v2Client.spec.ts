import { v2Client } from './v2Client'
import { requestHandler } from '@distributeaid/flexport-api-sandbox'
import * as http from 'http'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import { emptyPageMock, shipmentMock } from './testdata/mocks'
import { linkCollection, linkObject } from './types'
import { Type, liftDocument, liftShipment } from './generated'
import { ErrorInfo } from './types/ErrorInfo'

const port = 3000
const hostname = `http://0.0.0.0:${port}`

describe('v2Client', () => {
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
	it('sends the right headers', async () => {
		const fetchMock = emptyPageMock()
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})

		await pipe(client.shipment_index())()
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
	it('resolves collection links', async () => {
		const documentsLink = linkCollection({
			_object: Type.CollectionRef,
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=677632',
		})

		const fetchMock = emptyPageMock()
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(documentsLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveCollection(liftDocument)),
		)()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/documents?f.shipment.id=677632',
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

	it('resolves object links', async () => {
		const shipmentLink = linkObject({
			_object: Type.ObjectRef,
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/677632',
			id: 677632,
		})

		const fetchMock = shipmentMock()
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(shipmentLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveObject(liftShipment)),
		)()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/shipments/677632',
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
