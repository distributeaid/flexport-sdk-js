import { AddressBase } from './AddressBase'
import { MoneyBase } from './MoneyBase'
import { WeightBase } from './WeightBase'
import { VolumeBase } from './VolumeBase'
import { CommercialInvoiceLineItemBase } from './CommercialInvoiceLineItemBase'
import { ShipmentRefBase } from './ShipmentRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CommercialInvoiceBase = {
	/**
	 * Type of the object. Always /commercial_invoice for this object.
	 */
	readonly _object: '/commercial_invoice'
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
	readonly manufacturer_addresses?: AddressBase[]
	readonly total_value?: MoneyBase
	/**
	 * Total units on this commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "123.0"
	 */
	readonly total_unit_count?: string
	readonly total_weight?: WeightBase
	readonly total_volume?: VolumeBase
	/**
	 * JSON-schema: array
	 */
	readonly line_items?: CommercialInvoiceLineItemBase[]
	readonly shipment?: ShipmentRefBase
}
