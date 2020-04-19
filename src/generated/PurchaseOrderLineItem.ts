import { Type } from './Type'
import { PurchaseOrderRef } from './PurchaseOrderRef'
import { Product } from './Product'
import { Money } from './Money'
import { BookingLineItemCollectionRef } from './BookingLineItemCollectionRef'
import { TransportationMode } from './TransportationMode'
import { Place } from './Place'
import { Address } from './Address'
import { HsCode } from './HsCode'
import { Metadata } from './Metadata'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PurchaseOrderLineItem = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.PurchaseOrderLineItem
	/**
	 * Unique identifier for the line item on the latest version of the PO
	 *
	 * JSON-schema: integer
	 * @example 123456
	 */
	readonly id?: number
	readonly purchase_order?: PurchaseOrderRef
	/**
	 * JSON-schema: integer
	 * @example 1
	 */
	readonly line_item_number?: number
	/**
	 * Custom identifier for the line item
	 *
	 * JSON-schema: string
	 * @example "item1"
	 */
	readonly item_key?: string
	readonly product?: Product
	/**
	 * JSON-schema: integer
	 */
	readonly units?: number
	readonly unit_cost?: Money
	readonly booking_line_items?: BookingLineItemCollectionRef
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
	readonly transportation_mode?: TransportationMode
	/**
	 * JSON-schema: string
	 * @example "BBL"
	 */
	readonly unit_of_measure?:
		| 'BBL'
		| 'CAR'
		| 'CGM'
		| 'CKG'
		| 'CM'
		| 'CM2'
		| 'CTN'
		| 'CYK'
		| 'DPC'
		| 'DPR'
		| 'DS'
		| 'FBM'
		| 'G'
		| 'GBQ'
		| 'GR'
		| 'GRL'
		| 'HUN'
		| 'IRG'
		| 'JWL'
		| 'K'
		| 'KG'
		| 'KM'
		| 'KM3'
		| 'KWH'
		| 'L'
		| 'LNM'
		| 'M'
		| 'M2'
		| 'M3'
		| 'MBQ'
		| 'NO'
		| 'OSG'
		| 'PCS'
		| 'PDG'
		| 'PFL'
		| 'PK'
		| 'PRS'
		| 'PTG'
		| 'PX'
		| 'RHG'
		| 'RUG'
		| 'T'
		| 'TDWB'
		| 'W'
		| 'X'
	/**
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly must_arrive_date?: string
	readonly origin_port?: Place
	readonly origin_address?: Address
	readonly destination_port?: Place
	readonly destination_address?: Address
	/**
	 * JSON-schema: array
	 */
	readonly hs_codes?: HsCode[]
	readonly metadata?: Metadata
}
