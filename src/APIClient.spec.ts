import { createClient } from './createClient'
import { emptyPageMock, shipmentMock } from './testdata/mocks'
import { linkCollection, linkObject, Type } from './types'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'

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
		const documentsLink = linkCollection({
			_object: Type.COLLECTION_REF_TYPE,
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=677632',
		})

		const fetchMock = emptyPageMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			documentsLink,
			TE.fromOption(() => undefined),
			TE.map(async link => client.resolveCollectionRef(link)()),
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
			_object: Type.OBJECT_REF_TYPE,
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/677632',
			id: 677632,
		})

		const fetchMock = shipmentMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			shipmentLink,
			TE.fromOption(() => undefined),
			TE.map(async link => client.resolveObjectRef(link)()),
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
})
