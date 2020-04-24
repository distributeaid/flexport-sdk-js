/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
/**
 * Describes the number of units used to calculate the price of a line item
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
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftInvoiceQuantity = (original: InvoiceQuantity) => {
	return original
}
