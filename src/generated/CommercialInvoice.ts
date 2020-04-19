import { Type } from './Type'
import { Address } from './Address'
import { Money } from './Money'
import { Weight } from './Weight'
import { Volume } from './Volume'
import { CommercialInvoiceLineItem } from './CommercialInvoiceLineItem'
import { ShipmentRef } from './ShipmentRef'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CommercialInvoice = {
	/**
	 * Type of the object. Always /commercial_invoice for this object.
	 */
	readonly _object: Type.CommercialInvoice
	/**
	 * Unique identifier for the commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "abcxyz-23456-def"
	 */
	readonly id?: string
	/**
	 * JSON-schema: string
	 * @example "ABCDEFGHIJKLMNOP"
	 */
	readonly invoice_number?: string
	/**
	 * JSON-schema: array
	 */
	readonly manufacturer_addresses?: Address[]
	readonly total_value?: Money
	/**
	 * Total units on this commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "123.0"
	 */
	readonly total_unit_count?: string
	readonly total_weight?: Weight
	readonly total_volume?: Volume
	/**
	 * JSON-schema: array
	 */
	readonly line_items?: CommercialInvoiceLineItem[]
	readonly shipment?: ShipmentRef
}
