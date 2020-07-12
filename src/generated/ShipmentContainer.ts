/**
 * Auto-generated file. Do not change.
 */
import { Metadata } from './Metadata'
import { ShipmentItem } from './ShipmentItem'
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { linkCollection } from '../links'
import { linkObject } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { ResolvableObject } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export enum ShipmentContainerContainerTypeTypes {
	DRY = 'dry',
	FLAT_RACK = 'flat_rack',
	HEADLOAD = 'headload',
	OPEN = 'open',
	REEFER = 'reefer',
	LCL = 'lcl',
	TANK = 'tank',
	VENTILATED = 'ventilated',
	BULK = 'bulk',
	SPECIAL = 'special',
}
export enum ShipmentContainerContainerSizeTypes {
	TWENTY_FT = 'twenty_ft',
	FOURTY_FT = 'fourty_ft',
	FOURTY_FT_HC = 'fourty_ft_hc',
	FOURTY_FIVE_FT_HC = 'fourty_five_ft_hc',
	FIFTY_THREE_FT = 'fifty_three_ft',
	FIFTY_THREE_FT_HC = 'fifty_three_ft_hc',
}
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
	readonly container_type?: ShipmentContainerContainerTypeTypes
	/**
	 * JSON-schema: string
	 * @example "BWSE3982156"
	 */
	readonly container_number?: string
	/**
	 * JSON-schema: string
	 * @example "fourty_ft"
	 */
	readonly container_size?: ShipmentContainerContainerSizeTypes
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
		estimated_departure_date:
			estimated_departure_date !== undefined
				? new Date(estimated_departure_date)
				: undefined,
		actual_departure_date:
			actual_departure_date !== undefined
				? new Date(actual_departure_date)
				: undefined,
		estimated_arrival_date:
			estimated_arrival_date !== undefined
				? new Date(estimated_arrival_date)
				: undefined,
		actual_arrival_date:
			actual_arrival_date !== undefined
				? new Date(actual_arrival_date)
				: undefined,
		estimated_pickup_date:
			estimated_pickup_date !== undefined
				? new Date(estimated_pickup_date)
				: undefined,
		actual_pickup_date:
			actual_pickup_date !== undefined
				? new Date(actual_pickup_date)
				: undefined,
		estimated_delivery_date:
			estimated_delivery_date !== undefined
				? new Date(estimated_delivery_date)
				: undefined,
		actual_delivery_date:
			actual_delivery_date !== undefined
				? new Date(actual_delivery_date)
				: undefined,
		last_free_day_date:
			last_free_day_date !== undefined
				? new Date(last_free_day_date)
				: undefined,
		available_for_pickup_date:
			available_for_pickup_date !== undefined
				? new Date(available_for_pickup_date)
				: undefined,
		estimated_available_for_pickup_date:
			estimated_available_for_pickup_date !== undefined
				? new Date(estimated_available_for_pickup_date)
				: undefined,
		shipment: linkObject(shipment),
		container_legs: linkCollection(container_legs),
	}
}
