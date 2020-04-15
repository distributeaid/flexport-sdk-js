import { PurchaseOrderRefBase } from './PurchaseOrderRefBase'
import { ProductBase } from './ProductBase'
import { MoneyBase } from './MoneyBase'
import { BookingLineItemCollectionRefBase } from './BookingLineItemCollectionRefBase'
import { TransportationModeBase } from './TransportationModeBase'
import { PlaceBase } from './PlaceBase'
import { AddressBase } from './AddressBase'
import { HsCodeBase } from './HsCodeBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PurchaseOrderLineItemBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/purchase_orders/line_item'
	/**
	 * Unique identifier for the line item on the latest version of the PO
	 *
	 * JSON-schema: integer
	 * @example 123456
	 */
	readonly id?: number
	readonly purchase_order?: PurchaseOrderRefBase
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
	readonly product?: ProductBase
	/**
	 * JSON-schema: integer
	 */
	readonly units?: number
	readonly unit_cost?: MoneyBase
	readonly booking_line_items?: BookingLineItemCollectionRefBase
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
	readonly transportation_mode?: TransportationModeBase
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
	readonly origin_port?: PlaceBase
	readonly origin_address?: AddressBase
	readonly destination_port?: PlaceBase
	readonly destination_address?: AddressBase
	/**
	 * JSON-schema: array
	 */
	readonly hs_codes?: HsCodeBase[]
	readonly metadata?: MetadataBase
}
