import { ShipmentRefBase } from './ShipmentRefBase'
import { CompanyEntityBase } from './CompanyEntityBase'
import { TransportationModeBase } from './TransportationModeBase'
import { OceanBookingDetailBase } from './OceanBookingDetailBase'
import { AirBookingDetailBase } from './AirBookingDetailBase'
import { TruckingBookingDetailBase } from './TruckingBookingDetailBase'
import { AddressBase } from './AddressBase'
import { CargoBase } from './CargoBase'
import { BookingLineItemCollectionRefBase } from './BookingLineItemCollectionRefBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type BookingBase = {
	/**
	 * Unique identifier for the booking
	 *
	 * JSON-schema: integer
	 * @example 2983
	 */
	readonly id?: number
	/**
	 * Type of the object
	 */
	readonly _object: '/booking'
	/**
	 * The name of the booking
	 *
	 * JSON-schema: string
	 * @example "PO 12345"
	 */
	readonly name?: string
	readonly shipment?: ShipmentRefBase
	/**
	 * JSON-schema: string
	 */
	readonly status?: 'archived' | 'draft' | 'submitted' | 'booked' | 'shipment'
	readonly shipper_entity?: CompanyEntityBase
	readonly consignee_entity?: CompanyEntityBase
	/**
	 * JSON-schema: string
	 * @example "John Doe | john@example.com | 905-555-1234"
	 */
	readonly notify_party?: string
	readonly transportation_mode?: TransportationModeBase
	readonly ocean_booking?: OceanBookingDetailBase
	readonly air_booking?: AirBookingDetailBase
	readonly trucking_booking?: TruckingBookingDetailBase
	readonly origin_address?: AddressBase
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
	readonly destination_address?: AddressBase
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly delivery_date?: string
	/**
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_export_customs_service?: boolean
	readonly cargo?: CargoBase
	/**
	 * JSON-schema: string
	 * @example "This message is written in invisible ink."
	 */
	readonly special_instructions?: string
	readonly booking_line_items?: BookingLineItemCollectionRefBase
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly created_at?: string
	readonly metadata?: MetadataBase
}
