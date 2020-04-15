import { CompanyBase } from './CompanyBase'
import { TransportationModeBase } from './TransportationModeBase'
import { PlaceBase } from './PlaceBase'
import { AddressBase } from './AddressBase'
import { PurchaseOrderLineItemCollectionRefBase } from './PurchaseOrderLineItemCollectionRefBase'
import { MetadataBase } from './MetadataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PurchaseOrderBase = {
	/**
	 * A unique identifier for the purchase order
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
	 * The name of the purchase order
	 *
	 * JSON-schema: string
	 * @example "PO 12345 - \"shipment\""
	 */
	readonly name?: string
	/**
	 * The status of the purchase order
	 *
	 * JSON-schema: string
	 * @example "open"
	 */
	readonly status?: 'open' | 'closed' | 'cancelled'
	readonly seller?: CompanyBase
	readonly buyer?: CompanyBase
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
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
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
	 * JSON-schema: string
	 * @example "This message is written in invisible ink"
	 */
	readonly memo?: string
	/**
	 * JSON-schema: string (date_time)
	 */
	readonly archived_at?: string
	/**
	 * JSON-schema: string (date_time)
	 */
	readonly created_at?: string
	/**
	 * JSON-schema: string (date_time)
	 */
	readonly updated_at?: string
	readonly line_items?: PurchaseOrderLineItemCollectionRefBase
	readonly metadata?: MetadataBase
}
