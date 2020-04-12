import { createClient } from './createClient'
import { paginate } from './paginate'
import * as fs from 'fs'
import * as path from 'path'
import { emptyPageMock } from './testdata/mocks'
import { isRight, Right } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { Shipment, Type } from './types'
import { pipe } from 'fp-ts/lib/pipeable'

const shipmentsPage1 = JSON.parse(
	fs
		.readFileSync(path.join(process.cwd(), 'src', 'testdata', 'shipments.json'))
		.toString(),
)

describe('paginate', () => {
	it('follows pagination links', async () => {
		const fetchImplementation = jest.fn()
		fetchImplementation.mockImplementationOnce(async () =>
			Promise.resolve({
				status: 200,
				json: async () => shipmentsPage1,
			}),
		)
		fetchImplementation.mockImplementationOnce(emptyPageMock())
		const client = createClient({
			apiKey: 'some-api-key',
			fetchImplementation,
		})
		const shipments = await pipe(
			client.listAllShipments(),
			TE.chain(paginate(client)),
		)()

		expect(fetchImplementation).toHaveBeenCalledWith(
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
		expect(fetchImplementation).toHaveBeenCalledWith(
			'https://api.flexport.com/shipments?page=2',
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
		expect(isRight(shipments)).toBeTruthy()
		expect((shipments as Right<Shipment[]>).right).toHaveLength(1)
		expect((shipments as Right<Shipment[]>).right[0]._object).toEqual(
			Type.Shipment,
		)
	})
})
