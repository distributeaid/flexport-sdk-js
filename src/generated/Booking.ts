/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { AirBookingDetail } from './AirBookingDetail'
import { Cargo } from './Cargo'
import { CompanyEntity } from './CompanyEntity'
import { Metadata } from './Metadata'
import { OceanBookingDetail } from './OceanBookingDetail'
import { TransportationMode } from './TransportationMode'
import { TruckingBookingDetail } from './TruckingBookingDetail'
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { linkCollection } from '../links'
import { linkObject } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { ResolvableObject } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export enum BookingStatusTypes {
	ARCHIVED = 'archived',
	DRAFT = 'draft',
	SUBMITTED = 'submitted',
	BOOKED = 'booked',
	SHIPMENT = 'shipment',
}
export type Booking = {
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
	readonly _object: Type.Booking
	/**
	 * The name of the booking
	 *
	 * JSON-schema: string
	 * @example "PO 12345"
	 */
	readonly name?: string
	readonly shipment?: ApiObjectRef
	/**
	 * JSON-schema: string
	 */
	readonly status?: BookingStatusTypes
	readonly shipper_entity?: CompanyEntity
	readonly consignee_entity?: CompanyEntity
	/**
	 * JSON-schema: string
	 * @example "John Doe | john@example.com | 905-555-1234"
	 */
	readonly notify_party?: string
	readonly transportation_mode?: TransportationMode
	readonly ocean_booking?: OceanBookingDetail
	readonly air_booking?: AirBookingDetail
	readonly trucking_booking?: TruckingBookingDetail
	readonly origin_address?: Address
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
	readonly destination_address?: Address
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly delivery_date?: string
	/**
	 * Determines if the booking requires Flexport to provide export customs services.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_export_customs_service?: boolean
	/**
	 * Determines if the booking requires Flexport to provide import customs services.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_import_customs_service?: boolean
	readonly cargo?: Cargo
	/**
	 * JSON-schema: string
	 * @example "This message is written in invisible ink."
	 */
	readonly special_instructions?: string
	readonly booking_line_items?: ApiCollectionRef
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly created_at?: string
	readonly metadata?: Metadata
}
export type LiftedBooking = TypedApiObject &
	Omit<Booking, 'created_at' | 'shipment' | 'booking_line_items'> & {
		readonly created_at?: Date
		readonly shipment: Option<ResolvableObject>
		readonly booking_line_items: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBooking = (original: Booking): LiftedBooking => {
	const { created_at, shipment, booking_line_items, ...rest } = original
	return {
		...rest,
		created_at: created_at !== undefined ? new Date(created_at) : undefined,
		shipment: linkObject(shipment),
		booking_line_items: linkCollection(booking_line_items),
	}
}
