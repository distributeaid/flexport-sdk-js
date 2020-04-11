import { createClient } from '..'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { handleError } from './handleError'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

pipe(
	client.listAllShipments(),
	TE.map(shipments => {
		shipments.items.forEach(shipment => {
			console.log(
				shipment.id,
				shipment.name,
				shipment.calculated_weight &&
					`(${shipment.calculated_weight?.value} ${shipment.calculated_weight.unit})`,
				shipment.status,
				shipment.actual_delivered_in_full_date,
			)
		})
	}),
)().catch(handleError)