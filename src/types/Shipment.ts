import { ApiResponseObject } from './ApiResponseObject'
import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { Either, right } from 'fp-ts/lib/Either'

export const SHIPMENT_TYPE = '/shipment'

export type Shipment = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/shipment` for this object.
	 */
	_object: typeof SHIPMENT_TYPE
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
	 * Date when the shipment object was last updated. In ISO8601 UTC format with timezone denoted by Z.
	 */
	updated_at: Date

	/**
	 * Date when the shipment was archived, if applicable. In ISO8601 UTC format with timezone denoted by Z.
	 */
	archived_at: Date

	/**
	 * Estimated departure date from the first port of the main voyage. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	estimated_departure_date: Date

	/**
	 * Actual departure date from the first port of the main voyage. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	actual_departure_date: Date

	/**
	 * Estimated arrival date to the last port of the main voyage. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	estimated_arrival_date: Date

	/**
	 * Actual arrival date to the last port of the main voyage. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	actual_arrival_date: Date

	/**
	 * Estimated pickup date from the origin location. For ocean shipments with multiple containers, this is the date of last picked up container. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	estimated_picked_up_in_full_date: Date

	/**
	 * Actual pickup date from the origin location. For ocean shipments with multiple containers, this is the date of last picked up container. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	actual_picked_up_in_full_date: Date

	/**
	 * Estimated delivery date to the destination location. For ocean shipments with multiple containers, this is the date of last delivered container. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	estimated_delivered_in_full_date: Date

	/**
	 * Actual delivery date to the destination location. For ocean shipments with multiple containers, this is the date of last delivered container. In ISO8601 format with timezone denoted by +/-HH:MM.
	 */
	actual_delivered_in_full_date: Date
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
): Either<ApiError, Shipment> =>
	right({
		...apiResponseObject,
		...dateFields.reduce(
			(d, f) => ({
				...d,
				[f]: apiResponseObject[f] ? new Date(apiResponseObject[f]) : undefined,
			}),
			{} as { [key: string]: Date | undefined },
		),
	} as Shipment)
