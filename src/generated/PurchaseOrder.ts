/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Company } from './Company'
import { TransportationMode } from './TransportationMode'
import { Place } from './Place'
import { Address } from './Address'
import { PurchaseOrderLineItemCollectionRef } from './PurchaseOrderLineItemCollectionRef'
import { Metadata } from './Metadata'
export type PurchaseOrder = {
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
	readonly _object: Type.PurchaseOrder
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
	readonly seller?: Company
	readonly buyer?: Company
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
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
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
	readonly line_items?: PurchaseOrderLineItemCollectionRef
	readonly metadata?: Metadata
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPurchaseOrder = (original: PurchaseOrder) => {
	return original
}
