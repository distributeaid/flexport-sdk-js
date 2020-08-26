import { liftShipment } from './generated'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
const shipmentJSON = require('@distributeaid/flexport-api-sandbox/sandbox/shipments/685551')

describe('lifter', () => {
	it('should transform JSON', async () => {
		const shipment = liftShipment(shipmentJSON.data)
		expect(shipment.name).toEqual('Ron-Quote_2 ')
	})
})
