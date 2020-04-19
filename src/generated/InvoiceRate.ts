import { Type } from './Type'
/**
 * Describes the rate per unit used to calculate the price of a line item
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type InvoiceRate = {
	/**
	 * The type of the object
	 */
	readonly _object: Type.InvoiceRate
	/**
	 * numeric value described by qualifier
	 *
	 * JSON-schema: string (decimal)
	 * @example "2.31"
	 */
	readonly value?: string
	/**
	 * describes what the value represents
	 *
	 * JSON-schema: string
	 * @example "'USD', '% Drayage Base'"
	 */
	readonly qualifier?: string
}
