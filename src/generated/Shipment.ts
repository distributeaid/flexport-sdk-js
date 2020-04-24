/**
 * Auto-generated file. Do not change.
 */
import { Metadata } from './Metadata'
import { Type } from './Type'
import { TransportationMode } from './TransportationMode'
import { FreightType } from './FreightType'
import { Weight } from './Weight'
import { Volume } from './Volume'
import { ShipmentStatus } from './ShipmentStatus'
import { OceanShipmentDetail } from './OceanShipmentDetail'
import { AirShipmentDetail } from './AirShipmentDetail'
import { CompanyEntity } from './CompanyEntity'
import { ShipmentItem } from './ShipmentItem'
import { LegCollectionRef } from './LegCollectionRef'
import { CustomsEntryCollectionRef } from './CustomsEntryCollectionRef'
import { CommercialInvoiceCollectionRef } from './CommercialInvoiceCollectionRef'
import { DocumentCollectionRef } from './DocumentCollectionRef'
import { BookingRef } from './BookingRef'
export type Shipment = {
	readonly metadata?: Metadata
	/**
	 * Type of the object
	 */
	readonly _object: Type.Shipment
	/**
	 * Unique identifier for the shipment
	 *
	 * JSON-schema: integer
	 * @example 2983
	 */
	readonly id?: number
	/**
	 * The name of the shipment
	 *
	 * JSON-schema: string
	 * @example "ABC Shipment"
	 */
	readonly name?: string
	readonly transportation_mode?: TransportationMode
	readonly freight_type?: FreightType
	/**
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm?:
		| 'EXW'
		| 'FOB'
		| 'FAS'
		| 'FCA'
		| 'CPT'
		| 'CFR'
		| 'CIF'
		| 'CIP'
		| 'DAT'
		| 'DAP'
		| 'DDP'
		| 'DPU'
	readonly calculated_weight?: Weight
	readonly calculated_volume?: Volume
	/**
	 * JSON-schema: integer
	 * @example 8372
	 */
	readonly pieces?: number
	/**
	 * JSON-schema: string
	 * @example "V12345678"
	 */
	readonly it_number?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly created_date?: string
	readonly status?: ShipmentStatus
	/**
	 * The level of attention Flexport should give to this shipment
	 *
	 * JSON-schema: string
	 * @example "standard"
	 */
	readonly priority?: 'standard' | 'high'
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly updated_at?: string
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
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_picked_up_in_full_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_picked_up_in_full_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_delivered_in_full_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_delivered_in_full_date?: string
	readonly ocean_shipment?: OceanShipmentDetail
	readonly air_shipment?: AirShipmentDetail
	/**
	 * JSON-schema: array
	 */
	readonly shippers?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly consignees?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly buyers?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly sellers?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly importers_of_record?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly items?: ShipmentItem[]
	readonly legs?: LegCollectionRef
	readonly customs_entries?: CustomsEntryCollectionRef
	readonly commercial_invoices?: CommercialInvoiceCollectionRef
	readonly documents?: DocumentCollectionRef
	/**
	 * DEPRECATED date field
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly departure_date?: string
	/**
	 * DEPRECATED date field
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly arrival_date?: string
	/**
	 * DEPRECATED date field
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly picked_up_in_full_date?: string
	/**
	 * DEPRECATED date field
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivered_in_full_date?: string
	/**
	 * The booking associated with this shipment
	 *
	 */
	readonly booking?: BookingRef
	/**
	 * Date when the shipment was archived, if applicable.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly archived_at?: string
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipment = (original: Shipment) => {
	return original
}
