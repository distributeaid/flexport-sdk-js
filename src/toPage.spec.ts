import { liftShipment } from './generated'
import { toPage } from './toPage'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const shipmentsJSON = require('@distributeaid/flexport-api-sandbox/sandbox/shipments')

describe('toPage', () => {
	it('should transform JSON', async () => {
		const shipments = toPage(liftShipment)(shipmentsJSON.data)
		expect(shipments.items).toHaveLength(10)
	})
})
