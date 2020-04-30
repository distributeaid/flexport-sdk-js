import * as path from 'path'
import { liftShipment } from './generated'
import { promises as fs } from 'fs'

describe('lifter', () => {
	it('should transform JSON', async () => {
		const shipmentJSON = JSON.parse(
			(
				await fs.readFile(
					path.join(
						process.cwd(),
						'node_modules',
						'@distributeaid/flexport-api-sandbox',
						'sandbox',
						'shipments',
						'685551.json',
					),
				)
			).toString(),
		)
		const shipment = liftShipment(shipmentJSON.data)
		expect(shipment.name).toEqual('Ron-Quote_2 ')
	})
	it.todo('should handle erroneous JSON')
})
