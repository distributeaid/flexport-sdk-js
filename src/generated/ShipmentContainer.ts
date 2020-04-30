/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Metadata } from './Metadata'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { ShipmentItem } from './ShipmentItem'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
import { ResolvableCollection } from '../types/Link'
import { linkCollection } from '../links'
export type ShipmentContainer = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ShipmentContainer
	/**
	 * JSON-schema: integer
	 * @example 283910
	 */
	readonly id?: number
	readonly metadata?: Metadata
	/**
	 * JSON-schema: string
	 * @example "dry"
	 */
	readonly container_type?:
		| 'dry'
		| 'flat_rack'
		| 'headload'
		| 'open'
		| 'reefer'
		| 'lcl'
		| 'tank'
		| 'ventilated'
		| 'bulk'
		| 'special'
	/**
	 * JSON-schema: string
	 * @example "BWSE3982156"
	 */
	readonly container_number?: string
	/**
	 * JSON-schema: string
	 * @example "fourty_ft"
	 */
	readonly container_size?:
		| 'twenty_ft'
		| 'fourty_ft'
		| 'fourty_ft_hc'
		| 'fourty_five_ft_hc'
		| 'fifty_three_ft'
		| 'fifty_three_ft_hc'
	/**
	 * JSON-schema: string
	 * @example "UE_WQ2934875"
	 */
	readonly seal_number?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_departure_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_departure_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_arrival_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_arrival_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_pickup_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_pickup_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_delivery_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_delivery_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly last_free_day_date?: string
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly empty_returned_date?: string
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly available_for_pickup_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_available_for_pickup_date?: string
	readonly shipment?: ApiObjectRef
	readonly container_legs?: ApiCollectionRef
	/**
	 * JSON-schema: array
	 */
	readonly items?: ShipmentItem[]
}
export type LiftedShipmentContainer = TypedApiObject &
	Omit<
		ShipmentContainer,
		| 'estimated_departure_date'
		| 'actual_departure_date'
		| 'estimated_arrival_date'
		| 'actual_arrival_date'
		| 'estimated_pickup_date'
		| 'actual_pickup_date'
		| 'estimated_delivery_date'
		| 'actual_delivery_date'
		| 'last_free_day_date'
		| 'available_for_pickup_date'
		| 'estimated_available_for_pickup_date'
		| 'shipment'
		| 'container_legs'
	> & {
		readonly estimated_departure_date?: Date
		readonly actual_departure_date?: Date
		readonly estimated_arrival_date?: Date
		readonly actual_arrival_date?: Date
		readonly estimated_pickup_date?: Date
		readonly actual_pickup_date?: Date
		readonly estimated_delivery_date?: Date
		readonly actual_delivery_date?: Date
		readonly last_free_day_date?: Date
		readonly available_for_pickup_date?: Date
		readonly estimated_available_for_pickup_date?: Date
		readonly shipment: Option<ResolvableObject>
		readonly container_legs: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentContainer = (
	original: ShipmentContainer,
): LiftedShipmentContainer => {
	const {
		estimated_departure_date,
		actual_departure_date,
		estimated_arrival_date,
		actual_arrival_date,
		estimated_pickup_date,
		actual_pickup_date,
		estimated_delivery_date,
		actual_delivery_date,
		last_free_day_date,
		available_for_pickup_date,
		estimated_available_for_pickup_date,
		shipment,
		container_legs,
		...rest
	} = original
	return {
		...rest,
		estimated_departure_date: estimated_departure_date
			? new Date(estimated_departure_date)
			: undefined,
		actual_departure_date: actual_departure_date
			? new Date(actual_departure_date)
			: undefined,
		estimated_arrival_date: estimated_arrival_date
			? new Date(estimated_arrival_date)
			: undefined,
		actual_arrival_date: actual_arrival_date
			? new Date(actual_arrival_date)
			: undefined,
		estimated_pickup_date: estimated_pickup_date
			? new Date(estimated_pickup_date)
			: undefined,
		actual_pickup_date: actual_pickup_date
			? new Date(actual_pickup_date)
			: undefined,
		estimated_delivery_date: estimated_delivery_date
			? new Date(estimated_delivery_date)
			: undefined,
		actual_delivery_date: actual_delivery_date
			? new Date(actual_delivery_date)
			: undefined,
		last_free_day_date: last_free_day_date
			? new Date(last_free_day_date)
			: undefined,
		available_for_pickup_date: available_for_pickup_date
			? new Date(available_for_pickup_date)
			: undefined,
		estimated_available_for_pickup_date: estimated_available_for_pickup_date
			? new Date(estimated_available_for_pickup_date)
			: undefined,
		shipment: linkObject(shipment),
		container_legs: linkCollection(container_legs),
	}
}
