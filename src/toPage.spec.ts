import * as path from 'path'
import { liftShipment } from './generated'
import { promises as fs } from 'fs'
import { toPage } from './toPage'

describe('toPage', () => {
	it('should transform JSON', async () => {
		const shipmentsJSON = JSON.parse(
			(
				await fs.readFile(
					path.join(
						process.cwd(),
						'node_modules',
						'@distributeaid/flexport-api-sandbox',
						'sandbox',
						'shipments.json',
					),
				)
			).toString(),
		)
		const shipments = toPage(liftShipment)(shipmentsJSON.data)
		expect(shipments.items).toHaveLength(10)
	})
	it.todo('should handle erroneous JSON')
})
