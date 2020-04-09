import { createClient } from '..'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { handleError } from './handleError'
import { createError, ShipmentLeg } from '../types'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

const shipmentId = process.env.SHIPMENT_ID || 677632

console.log(`Fetching legs for shipment ${shipmentId}`)

pipe(
	client.getShipment(shipmentId),
	TE.map(({ legs }) => legs),
	TE.chain(TE.fromOption(() => createError('Shipment has no legs!'))),
	TE.chain(client.resolveCollectionRef<ShipmentLeg>()),
	TE.map(legs => {
		legs.items.map(leg => {
			console.log(
				'-',
				(
					leg.actual_departure_date || leg.estimated_departure_date
				)?.toLocaleDateString(),
				leg.origin.place.name,
				`(${leg.origin.place.address.street_address}, ${leg.origin.place.address.zip} ${leg.origin.place.address.city}, ${leg.origin.place.address.country_code})`,
				'->',
				(
					leg.actual_arrival_date || leg.estimated_arrival_date
				)?.toLocaleDateString(),
				leg.destination.place.name,
				`(${leg.destination.place.address.street_address}, ${leg.destination.place.address.zip} ${leg.destination.place.address.city}, ${leg.destination.place.address.country_code})`,
			)
		})
	}),
)().catch(handleError)
