import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { Either, right, isLeft } from 'fp-ts/lib/Either'
import {
	ResolvableCollection,
	ResolvableObject,
	linkCollection,
	linkObject,
} from './Link'
import { Option } from 'fp-ts/lib/Option'
import { parseDateFields } from '../transformer/parseDateFields'
import { Quantity, toQuantity } from './Quantity'
import { Type } from './types'

export type Shipment = ApiObject & {
	/**
	 * String representing the object’s type. Always `/shipment` for this object.
	 */
	_object: Type.Shipment
	/**
	 * Unique identifier for the object.
	 */
	id: number
	/**
	 * Name of the shipment.
	 */
	name: string
	/**
	 * Status of the shipment.
	 */
	status:
		| 'seller_location'
		| 'in_transit_to_departure_port'
		| 'departure_port'
		| 'in_transit_to_arrival_port'
		| 'arrival_port'
		| 'in_transit_to_final_destination'
		| 'final_destination'

	/**
	 * Date when the shipment object was last updated.
	 */
	updated_at: Date

	/**
	 * Date when the shipment was archived, if applicable.
	 */
	archived_at?: Date

	/**
	 * Estimated departure date from the first port of the main voyage.
	 */
	estimated_departure_date?: Date

	/**
	 * Actual departure date from the first port of the main voyage.
	 */
	actual_departure_date?: Date

	/**
	 * Estimated arrival date to the last port of the main voyage.
	 */
	estimated_arrival_date?: Date

	/**
	 * Actual arrival date to the last port of the main voyage.
	 */
	actual_arrival_date?: Date

	/**
	 * Estimated pickup date from the origin location. For ocean shipments with multiple containers, this is the date of last picked up container.
	 */
	estimated_picked_up_in_full_date?: Date

	/**
	 * Actual pickup date from the origin location. For ocean shipments with multiple containers, this is the date of last picked up container.
	 */
	actual_picked_up_in_full_date?: Date

	/**
	 * Estimated delivery date to the destination location. For ocean shipments with multiple containers, this is the date of last delivered container.
	 */
	estimated_delivered_in_full_date?: Date

	/**
	 * Actual delivery date to the destination location. For ocean shipments with multiple containers, this is the date of last delivered container.
	 */
	actual_delivered_in_full_date?: Date

	/**
	 * The booking associated with this shipment
	 */
	booking: Option<ResolvableObject>
	/**
	 * the legs of the shipment
	 */
	legs: Option<ResolvableCollection>
	/**
	 * customs entries for this shipment
	 */
	customs_entries: Option<ResolvableCollection>
	/**
	 * commercial invoices for this shipment
	 */
	commercial_invoices: Option<ResolvableCollection>
	/**
	 * the documents for this shipment,
	 */
	documents: Option<ResolvableCollection>
	/**
	 * Total weight (kg or lbs) of the shipment, calculated from individual pieces if package dimensions are known.
	 */
	calculated_weight?: Quantity
	/**
	 * Total volume (cbm or cft) of the shipment, calculated from individual pieces if package dimensions are known.
	 */
	calculated_volume?: Quantity
	/**
	 * Total number of pieces in the shipment.
	 */
	pieces: number
}

const dateFields = [
	'updated_at',
	'archived_at',
	'estimated_departure_date',
	'actual_departure_date',
	'estimated_arrival_date',
	'actual_arrival_date',
	'estimated_picked_up_in_full_date',
	'actual_picked_up_in_full_date',
	'estimated_delivered_in_full_date',
	'actual_delivered_in_full_date',
]

export const toShipment = (
	apiResponseObject: ApiObject,
): Either<ApiError, Shipment> => {
	let calculated_volume
	if (apiResponseObject.calculated_volume) {
		calculated_volume = toQuantity(apiResponseObject.calculated_volume)
		if (isLeft(calculated_volume)) return calculated_volume
	}

	let calculated_weight
	if (apiResponseObject.calculated_weight) {
		calculated_weight = toQuantity(apiResponseObject.calculated_weight)
		if (isLeft(calculated_weight)) return calculated_weight
	}

	return right({
		...apiResponseObject,
		...parseDateFields(apiResponseObject, dateFields),
		booking: linkObject(apiResponseObject.booking),
		legs: linkCollection(apiResponseObject.legs),
		customs_entries: linkCollection(apiResponseObject.customs_entries),
		commercial_invoices: linkCollection(apiResponseObject.commercial_invoices),
		documents: linkCollection(apiResponseObject.documents),
		calculated_volume: calculated_volume?.right,
		calculated_weight: calculated_weight?.right,
	} as Shipment)
}