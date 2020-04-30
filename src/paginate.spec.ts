import { paginate } from './paginate'
import * as fs from 'fs'
import * as path from 'path'
import { isRight, Right } from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { LiftedShipment, liftShipment } from './generated'
import { Type } from './generated/Type'
import { v2Client } from './v2Client'
import { emptyPageMock } from './testmocks'

const shipmentsPage1 = JSON.parse(
	fs
		.readFileSync(
			path.join(
				process.cwd(),
				'node_modules',
				'@distributeaid/flexport-api-sandbox',
				'sandbox',
				'shipments.json',
			),
		)
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
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation,
			endpoint: 'https://flexport-sandbox.example.com',
		})
		const shipments = await pipe(
			client.shipment_index(),
			TE.chain((f) => {
				const r = paginate(client.resolvePage(liftShipment))(f)
				return r
			}),
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
		expect(isRight(shipments)).toBeTruthy()
		expect((shipments as Right<LiftedShipment[]>).right).toHaveLength(10)
		expect((shipments as Right<LiftedShipment[]>).right[0]._object).toEqual(
			Type.Shipment,
		)
	})
})
