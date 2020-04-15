import { MetadataBase } from './MetadataBase'
import { ShipmentRefBase } from './ShipmentRefBase'
import { ContainerLegCollectionRefBase } from './ContainerLegCollectionRefBase'
import { ShipmentItemBase } from './ShipmentItemBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentContainerBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/ocean/shipment_container'
	/**
	 * JSON-schema: integer
	 * @example 283910
	 */
	readonly id?: number
	readonly metadata?: MetadataBase
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
	readonly shipment?: ShipmentRefBase
	readonly container_legs?: ContainerLegCollectionRefBase
	/**
	 * JSON-schema: array
	 */
	readonly items?: ShipmentItemBase[]
}
