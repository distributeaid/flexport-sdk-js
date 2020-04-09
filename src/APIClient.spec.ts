import { createClient } from './createClient'
import { toCollectionLink, toObjectLink } from './types/Link'
import { Document } from './types/Document'
import { emptyPageMock, shipmentMock } from './testdata/mocks'
import { Shipment } from './types'
import { pipe } from 'fp-ts/lib/pipeable'

describe('API Client', () => {
	it('can be instantiated', () => {
		const client = createClient({ apiKey: 'some-api-key' })
		expect(client).toBeDefined()
	})
	it('sends the right headers', async () => {
		const fetchMock = emptyPageMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})

		await pipe(client.listAllShipments())()
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
		const documentsLink = toCollectionLink<Document>({
			_object: '/api/refs/collection',
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=677632',
		})

		const fetchMock = emptyPageMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(documentsLink(client))()
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
		const shipmentLink = toObjectLink<Shipment>({
			_object: '/api/refs/object',
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/677632',
			id: 677632,
		})

		const fetchMock = shipmentMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(shipmentLink(client))()
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
})
