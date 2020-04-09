import { ApiObject } from './ApiObject'
import { ApiError, createError } from './ApiError'
import { right, Either, isLeft, left } from 'fp-ts/lib/Either'
import { linkObject, ResolvableObject } from './Link'
import { Shipment } from './Shipment'
import { ShipmentNode, toShipmentNode } from './ShipmentNode'
import { isNone } from 'fp-ts/lib/Option'
import { parseDateFields } from '../transformer/parseDateFields'

export const SHIPMENT_LEG_TYPE = '/shipment_leg'

/**
 * @see https://apibeta.flexport.com/reference/shipmentleg
 */
export type ShipmentLeg = ApiObject & {
	/**
	 * String representing the object’s type. Always `/shipment_leg` for this object.
	 */
	_object: typeof SHIPMENT_LEG_TYPE

	/**
	 * Estimated date when shipment arrives at the destination ShipmentNode of the shipment leg.
	 */
	estimated_arrival_date: Date

	/**
	 * Actual date when shipment arrives at the destination ShipmentNode of the shipment leg.
	 */
	actual_arrival_date: Date

	/**
	 * Estimated date when shipment departs from the origin ShipmentNode of the shipment leg.
	 */
	estimated_departure_date: Date

	/**
	 * Actual date when shipment departs from the origin ShipmentNode of the shipment leg.
	 */
	actual_departure_date: Date

	/**
	 * Origin node of the shipment leg
	 */
	origin: ShipmentNode

	/**
	 * Destination node of the shipment leg
	 */
	destination: ShipmentNode

	/**
	 * Link to the shipment
	 */
	shipment: ResolvableObject<Shipment>

	/**
	 * Name of the shipment leg's transportation carrier.
	 */
	carrier_name?: string
}

const dateFields = [
	'estimated_arrival_date',
	'actual_arrival_date',
	'estimated_departure_date',
	'actual_departure_date',
]

export const toShipmentLeg = (
	apiResponseObject: ApiObject,
): Either<ApiError, ShipmentLeg> => {
	const origin = toShipmentNode(apiResponseObject.origin)
	const destination = toShipmentNode(apiResponseObject.destination)
	if (isLeft(origin)) return origin
	if (isLeft(destination)) return destination
	const shipment = linkObject<Shipment>(apiResponseObject.shipment)
	if (isNone(shipment)) return left(createError(`No shipment link found!`))
	return right({
		...apiResponseObject,
		...parseDateFields(apiResponseObject, dateFields),
		origin: origin.right,
		destination: destination.right,
		shipment: shipment.value,
	} as ShipmentLeg)
}
