import { ContainerCountsBase } from './ContainerCountsBase'
import { AddressBase } from './AddressBase'
import { PlaceBase } from './PlaceBase'
import { CargoBase } from './CargoBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type BookingAmendmentBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/booking_amendment'
	/**
	 * Unique identifier for the booking amendment
	 *
	 * JSON-schema: integer
	 * @example 334455
	 */
	readonly id?: number
	/**
	 * Unique identifier for the booking that this amendment is for
	 *
	 * JSON-schema: integer
	 * @example 2963
	 */
	readonly booking_id?: number
	/**
	 * Depending on various conditions, the requested booking amendment may either be accepted and applied instantly, or it may require Flexport approval. 'is_pending' is set to true if approval is required.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_pending?: boolean
	/**
	 * The requested new name of the booking
	 *
	 * JSON-schema: string
	 * @example "Valentine's Day - 2020"
	 */
	readonly new_name?: string
	/**
	 * The requested new container count values
	 *
	 */
	readonly new_container_counts?: ContainerCountsBase
	/**
	 * The requested new wants-pickup value
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly new_wants_pickup_service?: boolean
	/**
	 * The requested new origin address
	 *
	 */
	readonly new_origin_address?: AddressBase
	/**
	 * The requested new origin port
	 *
	 */
	readonly new_origin_port?: PlaceBase
	/**
	 * The requested new cargo ready date
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly new_cargo_ready_date?: string
	/**
	 * The requested new cargo, possibly including package details
	 *
	 */
	readonly new_cargo?: CargoBase
	/**
	 * The requested new metadata
	 *
	 */
	readonly new_metadata?: MetadataBase
}
