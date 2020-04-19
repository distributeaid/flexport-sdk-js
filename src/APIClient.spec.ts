import { createClient } from './createClient'
import { emptyPageMock, shipmentMock } from './testdata/mocks'
import { linkCollection, linkObject } from './types'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import { Type } from './generated/Type'
import { ErrorInfo } from './types/ErrorInfo'

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
			_object: Type.CollectionRef,
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=677632',
		})

		const fetchMock = emptyPageMock()
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(documentsLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveCollectionRef()),
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
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(shipmentLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveObjectRef()),
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
