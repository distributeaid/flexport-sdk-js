import { MoneyBase } from './MoneyBase'
import { InvoiceRateBase } from './InvoiceRateBase'
import { InvoiceQuantityBase } from './InvoiceQuantityBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type InvoiceItemBase = {
	/**
	 * Type of the object.
	 */
	readonly _object: '/invoice_item'
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
	readonly amount?: MoneyBase
	readonly rate?: InvoiceRateBase
	readonly quantity?: InvoiceQuantityBase
}
