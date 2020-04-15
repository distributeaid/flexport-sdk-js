import { ContainerCountsBase } from './ContainerCountsBase'
import { CargoBase } from './CargoBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateBookingAmendmentBase = {
	/**
	 * Identifier of the existing booking to be modified
	 *
	 * JSON-schema: integer
	 * @example 12345
	 */
	readonly booking_id: number
	/**
	 * Name of the booking.
	 *
	 * JSON-schema: string
	 * @example "Valentine's Day - 2020"
	 */
	readonly new_name?: string
	readonly new_container_counts?: ContainerCountsBase
	/**
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly new_wants_pickup_service?: boolean
	/**
	 * Customizable reference ID of network location that is the pickup location.
	 *
	 * JSON-schema: string
	 * @example "id-123456"
	 */
	readonly new_origin_address_ref?: string
	/**
	 * At most one of `origin_port_us_cbp_port_code` or  `origin_port_loc_code` may be specified. Unique port reference code used by US Customs and Border Protection.
	 *
	 * JSON-schema: string
	 * @example 57078
	 */
	readonly new_origin_port_us_cbp_port_code?: string
	/**
	 * At most one of `origin_port_us_cbp_port_code` or  `origin_port_loc_code` may be specified. UN code for the origin port.
	 *
	 * JSON-schema: string
	 * @example "CNYTN"
	 */
	readonly new_origin_port_loc_code?: string
	/**
	 * Date when cargo is ready for pickup at the origin location.
	 *
	 * JSON-schema: string (date)
	 * @example "2019-06-30"
	 */
	readonly new_cargo_ready_date?: string
	readonly new_cargo?: CargoBase
	readonly new_metadata?: MetadataBase
}
