import { paginate } from './paginate'
import { isRight, Right } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { LiftedShipment, liftShipment } from './generated'
import { Type } from './generated/Type'
import { v2Client } from './v2Client'
import { emptyPageMock, mockHeaders } from './testmocks'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const shipmentsPage1 = require('@distributeaid/flexport-api-sandbox/sandbox/shipments')
// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const shipmentsPage2 = require('@distributeaid/flexport-api-sandbox/sandbox/shipments?page=2&per=10')

describe('paginate', () => {
	it('follows pagination links', async () => {
		const fetchImplementation = jest.fn()
		fetchImplementation.mockImplementationOnce(async () =>
			Promise.resolve({
				status: 200,
				headers: mockHeaders(),
				json: async () => shipmentsPage1,
			}),
		)
		fetchImplementation.mockImplementationOnce(async () =>
			Promise.resolve({
				status: 200,
				headers: mockHeaders(),
				json: async () => shipmentsPage2,
			}),
		)
		fetchImplementation.mockImplementationOnce(emptyPageMock())
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation,
			endpoint: 'https://flexport-sandbox.example.com',
		})
		const shipments = await pipe(
			client.shipment_index(),
			TE.chain(paginate(client.resolvePage(liftShipment))),
		)()

		expect(fetchImplementation).toHaveBeenCalledWith(
			'https://flexport-sandbox.example.com/shipments',
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
			'https://flexport-sandbox.example.com/shipments?page=2&per=10',
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
			'https://flexport-sandbox.example.com/shipments?page=3&per=10',
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
		expect((shipments as Right<LiftedShipment[]>).right).toHaveLength(20)
		expect((shipments as Right<LiftedShipment[]>).right[0]._object).toEqual(
			Type.Shipment,
		)
	})
})
