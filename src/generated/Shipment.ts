/**
 * Auto-generated file. Do not change.
 */
import { AirShipmentDetail } from './AirShipmentDetail'
import { CompanyEntity } from './CompanyEntity'
import { FreightType } from './FreightType'
import { Metadata } from './Metadata'
import { OceanShipmentDetail } from './OceanShipmentDetail'
import { ShipmentItem } from './ShipmentItem'
import { ShipmentStatus } from './ShipmentStatus'
import { TransportationMode } from './TransportationMode'
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { linkCollection } from '../links'
import { linkObject } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { ResolvableObject } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export enum ShipmentIncotermTypes {
	EXW = 'EXW',
	FOB = 'FOB',
	FAS = 'FAS',
	FCA = 'FCA',
	CPT = 'CPT',
	CFR = 'CFR',
	CIF = 'CIF',
	CIP = 'CIP',
	DAT = 'DAT',
	DAP = 'DAP',
	DDP = 'DDP',
	DPU = 'DPU',
}
export enum ShipmentPriorityTypes {
	STANDARD = 'standard',
	HIGH = 'high',
}
export type Shipment = {
	readonly metadata: Metadata
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
	readonly id: number
	/**
	 * The name of the shipment
	 *
	 * JSON-schema: string
	 * @example "ABC Shipment"
	 */
	readonly name: string
	readonly transportation_mode: TransportationMode
	readonly freight_type: FreightType
	/**
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm: ShipmentIncotermTypes
	readonly calculated_weight?: Weight
	readonly calculated_volume?: Volume
	/**
	 * JSON-schema: integer
	 * @example 8372
	 */
	readonly pieces: number
	/**
	 * JSON-schema: string
	 * @example "V12345678"
	 */
	readonly it_number?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly created_date: string
	readonly status: ShipmentStatus
	/**
	 * The level of attention Flexport should give to this shipment
	 *
	 * JSON-schema: string
	 * @example "standard"
	 */
	readonly priority: ShipmentPriorityTypes
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
     * Actual arrival date to the last port of the main voyage.
    NOTE: This field is not kept up to date with the actual arrival dates of the shipment legs.
    
     *
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
	/**
	 * Determines if the shipment requires Flexport to provide export customs services.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_export_customs_service?: boolean
	/**
	 * Determines if the shipment requires Flexport to provide import customs services.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_import_customs_service?: boolean
	readonly ocean_shipment?: OceanShipmentDetail
	readonly air_shipment?: AirShipmentDetail
	/**
	 * JSON-schema: array
	 */
	readonly shippers: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly consignees: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly buyers: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly sellers: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly importers_of_record: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly items: ShipmentItem[]
	readonly legs: ApiCollectionRef
	readonly customs_entries: ApiCollectionRef
	readonly commercial_invoices: ApiCollectionRef
	readonly documents: ApiCollectionRef
	/**
	 * DEPRECATED date field
	 * @deprecated Do not use! This field is deprecated.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly departure_date?: string
	/**
	 * DEPRECATED date field
	 * @deprecated Do not use! This field is deprecated.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly arrival_date?: string
	/**
	 * DEPRECATED date field
	 * @deprecated Do not use! This field is deprecated.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly picked_up_in_full_date?: string
	/**
	 * DEPRECATED date field
	 * @deprecated Do not use! This field is deprecated.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivered_in_full_date?: string
	/**
	 * The booking associated with this shipment
	 *
	 */
	readonly booking?: ApiObjectRef
	/**
	 * Date when the shipment was archived, if applicable.
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly archived_at?: string
}
export type LiftedShipment = TypedApiObject &
	Omit<
		Shipment,
		| 'created_date'
		| 'updated_at'
		| 'estimated_departure_date'
		| 'actual_departure_date'
		| 'estimated_arrival_date'
		| 'actual_arrival_date'
		| 'estimated_picked_up_in_full_date'
		| 'actual_picked_up_in_full_date'
		| 'estimated_delivered_in_full_date'
		| 'actual_delivered_in_full_date'
		| 'archived_at'
		| 'booking'
		| 'legs'
		| 'customs_entries'
		| 'commercial_invoices'
		| 'documents'
	> & {
		readonly created_date: Date
		readonly updated_at?: Date
		readonly estimated_departure_date?: Date
		readonly actual_departure_date?: Date
		readonly estimated_arrival_date?: Date
		/**
     * Actual arrival date to the last port of the main voyage.
    NOTE: This field is not kept up to date with the actual arrival dates of the shipment legs.
    
     */
		readonly actual_arrival_date?: Date
		readonly estimated_picked_up_in_full_date?: Date
		readonly actual_picked_up_in_full_date?: Date
		readonly estimated_delivered_in_full_date?: Date
		readonly actual_delivered_in_full_date?: Date
		/**
		 * Date when the shipment was archived, if applicable.
		 */
		readonly archived_at?: Date
		/**
		 * The booking associated with this shipment
		 */
		readonly booking: Option<ResolvableObject>
		readonly legs: Option<ResolvableCollection>
		readonly customs_entries: Option<ResolvableCollection>
		readonly commercial_invoices: Option<ResolvableCollection>
		readonly documents: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipment = (original: Shipment): LiftedShipment => {
	const {
		created_date,
		updated_at,
		estimated_departure_date,
		actual_departure_date,
		estimated_arrival_date,
		actual_arrival_date,
		estimated_picked_up_in_full_date,
		actual_picked_up_in_full_date,
		estimated_delivered_in_full_date,
		actual_delivered_in_full_date,
		archived_at,
		booking,
		legs,
		customs_entries,
		commercial_invoices,
		documents,
		...rest
	} = original
	return {
		...rest,
		created_date: new Date(created_date),
		updated_at: updated_at !== undefined ? new Date(updated_at) : undefined,
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
		estimated_picked_up_in_full_date:
			estimated_picked_up_in_full_date !== undefined
				? new Date(estimated_picked_up_in_full_date)
				: undefined,
		actual_picked_up_in_full_date:
			actual_picked_up_in_full_date !== undefined
				? new Date(actual_picked_up_in_full_date)
				: undefined,
		estimated_delivered_in_full_date:
			estimated_delivered_in_full_date !== undefined
				? new Date(estimated_delivered_in_full_date)
				: undefined,
		actual_delivered_in_full_date:
			actual_delivered_in_full_date !== undefined
				? new Date(actual_delivered_in_full_date)
				: undefined,
		archived_at: archived_at !== undefined ? new Date(archived_at) : undefined,
		booking: linkObject(booking),
		legs: linkCollection(legs),
		customs_entries: linkCollection(customs_entries),
		commercial_invoices: linkCollection(commercial_invoices),
		documents: linkCollection(documents),
	}
}
