import { right, Either } from 'fp-ts/lib/Either'
import { linkObject, ResolvableObject } from '../types/Link'
import { Option, none } from 'fp-ts/lib/Option'
import { ErrorInfo } from '../types/ErrorInfo'
import { ShipmentLeg } from '../generated'
import { toDateOrUndefined } from '../transformer/toDate'

export type LiftedShipmentLeg = Omit<
	ShipmentLeg,
	| 'shipment'
	| 'estimated_arrival_date'
	| 'actual_arrival_date'
	| 'estimated_departure_date'
	| 'actual_departure_date'
> & {
	shipment: Option<ResolvableObject>
	estimated_arrival_date?: Date
	actual_arrival_date?: Date
	estimated_departure_date?: Date
	actual_departure_date?: Date
}

export const liftShipmentLeg = (
	shipmentLeg: ShipmentLeg,
): Either<ErrorInfo, LiftedShipmentLeg> => {
	const {
		shipment,
		estimated_arrival_date,
		actual_arrival_date,
		estimated_departure_date,
		actual_departure_date,
		...rest
	} = shipmentLeg

	let shipmentLink = none as Option<ResolvableObject>
	if (shipmentLeg.shipment) {
		shipmentLink = linkObject(shipment)
	}
	const l = {
		...rest,
		estimated_arrival_date: toDateOrUndefined(estimated_arrival_date),
		actual_arrival_date: toDateOrUndefined(actual_arrival_date),
		estimated_departure_date: toDateOrUndefined(estimated_departure_date),
		actual_departure_date: toDateOrUndefined(actual_departure_date),
		shipment: shipmentLink,
	}
	return right(l)
}
