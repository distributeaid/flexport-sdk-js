import { Type } from './Type'
import { Money } from './Money'
import { InvoiceRate } from './InvoiceRate'
import { InvoiceQuantity } from './InvoiceQuantity'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type InvoiceItem = {
	/**
	 * Type of the object.
	 */
	readonly _object: Type.InvoiceItem
	/**
	 * Description of charge.
	 *
	 * JSON-schema: string
	 * @example "FCL 40' HQ"
	 */
	readonly name?: string
	/**
	 * Code describing the charge.
	 *
	 * JSON-schema: string
	 * @example "fcl_40_hq"
	 */
	readonly slug?: string
	/**
	 * Category of the charge.
	 *
	 * JSON-schema: string
	 */
	readonly category?:
		| 'freight'
		| 'origin'
		| 'destination'
		| 'customs'
		| 'additional'
		| 'capital'
	readonly amount?: Money
	readonly rate?: InvoiceRate
	readonly quantity?: InvoiceQuantity
}
