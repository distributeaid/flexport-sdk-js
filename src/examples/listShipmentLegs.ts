import { v2Client } from '../v2Client'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { handleError } from './handleError'
import { Address, liftShipmentLeg } from '../generated'
import { createError } from '../types/ErrorInfo'

const client = v2Client({ apiKey: process.env.FLEXPORT_API_KEY || '' })

const shipmentId = process.env.SHIPMENT_ID
	? parseInt(process.env.SHIPMENT_ID, 10)
	: 677632

console.log(`Fetching legs for shipment ${shipmentId}`)

const addressToString = (address: Address) => {
	const a = []
	if (address.street_address) {
		a.push(address.street_address)
	}
	if (address.street_address2) {
		a.push(address.street_address2)
	}
	if (address.zip) {
		a.push(address.zip)
	}
	a.push(address.city, address.country_code)
	return a.join(', ')
}

pipe(
	client.shipment_show({ id: shipmentId }),
	TE.map(({ legs }) => legs),
	TE.chain(TE.fromOption(() => createError('Shipment has no legs!'))),
	TE.chain(client.resolveCollection(liftShipmentLeg)),
	TE.map((legs) => {
		legs.items.map((leg) => {
			console.log(
				'-',
				leg.actual_departure_date?.toLocaleDateString() ??
					leg.estimated_departure_date?.toLocaleDateString() ??
					'[departure pending]',
				leg.origin.place.name,
				`(${addressToString(leg.origin.place.address)})`,
				'->',
				leg.actual_arrival_date?.toLocaleDateString() ??
					leg.estimated_arrival_date?.toLocaleDateString() ??
					'[arrival pending]',
				leg.destination.place.name,
				`(${addressToString(leg.destination.place.address)})`,
			)
		})
	}),
)().catch(handleError)
