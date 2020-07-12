/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { Company } from './Company'
import { Metadata } from './Metadata'
import { Place } from './Place'
import { TransportationMode } from './TransportationMode'
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { linkCollection } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export enum PurchaseOrderStatusTypes {
	OPEN = 'open',
	CLOSED = 'closed',
	CANCELLED = 'cancelled',
}
export enum PurchaseOrderIncotermTypes {
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
	readonly status?: PurchaseOrderStatusTypes
	readonly seller?: Company
	readonly buyer?: Company
	/**
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm?: PurchaseOrderIncotermTypes
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
	readonly line_items?: ApiCollectionRef
	readonly metadata?: Metadata
}
export type LiftedPurchaseOrder = TypedApiObject &
	Omit<PurchaseOrder, 'line_items'> & {
		readonly line_items: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPurchaseOrder = (
	original: PurchaseOrder,
): LiftedPurchaseOrder => {
	const { line_items, ...rest } = original
	return {
		...rest,
		line_items: linkCollection(line_items),
	}
}
