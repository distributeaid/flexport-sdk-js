/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { Product } from './Product'
import { Money } from './Money'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { TransportationMode } from './TransportationMode'
import { Place } from './Place'
import { Address } from './Address'
import { HsCode } from './HsCode'
import { Metadata } from './Metadata'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
import { ResolvableCollection } from '../types/Link'
import { linkCollection } from '../links'
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
	readonly purchase_order?: ApiObjectRef
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
	readonly booking_line_items?: ApiCollectionRef
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
export type LiftedPurchaseOrderLineItem = TypedApiObject &
	Omit<PurchaseOrderLineItem, 'purchase_order' | 'booking_line_items'> & {
		readonly purchase_order: Option<ResolvableObject>
		readonly booking_line_items: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPurchaseOrderLineItem = (
	original: PurchaseOrderLineItem,
): LiftedPurchaseOrderLineItem => {
	const { purchase_order, booking_line_items, ...rest } = original
	return {
		...rest,
		purchase_order: linkObject(purchase_order),
		booking_line_items: linkCollection(booking_line_items),
	}
}
