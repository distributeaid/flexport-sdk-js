import { Type } from './Type'
/**
 * Describes the number of units used to calculate the price of a line item
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type InvoiceQuantity = {
	/**
	 * The type of the object
	 */
	readonly _object: Type.InvoiceQuantity
	/**
	 * numeric value described by qualifier
	 *
	 * JSON-schema: string (decimal)
	 * @example "1000"
	 */
	readonly value?: string
	/**
	 * describes what the value represents
	 *
	 * JSON-schema: string
	 * @example "'kg', 'bill of lading', 'USD'"
	 */
	readonly qualifier?: string
}
