import { MetadataBase } from './MetadataBase'
import { TransportationModeBase } from './TransportationModeBase'
import { FreightTypeBase } from './FreightTypeBase'
import { WeightBase } from './WeightBase'
import { VolumeBase } from './VolumeBase'
import { ShipmentStatusBase } from './ShipmentStatusBase'
import { OceanShipmentDetailBase } from './OceanShipmentDetailBase'
import { AirShipmentDetailBase } from './AirShipmentDetailBase'
import { CompanyEntityBase } from './CompanyEntityBase'
import { ShipmentItemBase } from './ShipmentItemBase'
import { LegCollectionRefBase } from './LegCollectionRefBase'
import { CustomsEntryCollectionRefBase } from './CustomsEntryCollectionRefBase'
import { CommercialInvoiceCollectionRefBase } from './CommercialInvoiceCollectionRefBase'
import { DocumentCollectionRefBase } from './DocumentCollectionRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentBase = {
	readonly metadata?: MetadataBase
	/**
	 * Type of the object
	 */
	readonly _object: '/shipments'
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
	readonly transportation_mode?: TransportationModeBase
	readonly freight_type?: FreightTypeBase
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
	readonly calculated_weight?: WeightBase
	readonly calculated_volume?: VolumeBase
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
	readonly status?: ShipmentStatusBase
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
	readonly ocean_shipment?: OceanShipmentDetailBase
	readonly air_shipment?: AirShipmentDetailBase
	/**
	 * JSON-schema: array
	 */
	readonly shippers?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly consignees?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly buyers?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly sellers?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly importers_of_record?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly items?: ShipmentItemBase[]
	readonly legs?: LegCollectionRefBase
	readonly customs_entries?: CustomsEntryCollectionRefBase
	readonly commercial_invoices?: CommercialInvoiceCollectionRefBase
	readonly documents?: DocumentCollectionRefBase
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
}
