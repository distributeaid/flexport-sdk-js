import { createClient } from '..'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { handleError } from './handleError'
import { paginate } from '../paginate'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

pipe(
	client.listAllShipments(),
	TE.chain(paginate(client)),
	TE.map((shipments) => {
		shipments.forEach((shipment) => {
			console.log(
				shipment.id,
				shipment.name,
				shipment.calculated_weight &&
					`(${shipment.calculated_weight?.value} ${shipment.calculated_weight.unit})`,
				shipment.status,
				shipment.actual_arrival_date ||
					shipment.estimated_delivered_in_full_date ||
					'delivery date unknown',
			)
		})
	}),
)().catch(handleError)
