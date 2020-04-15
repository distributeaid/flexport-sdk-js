import { MoneyBase } from './MoneyBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreditMemoBase = {
	/**
	 * The type of the object
	 */
	readonly _object: '/credit_memo'
	readonly amount?: MoneyBase
	/**
	 * Category of the credit memo
	 *
	 * JSON-schema: string
	 * @example "additional"
	 */
	readonly category?: string
	/**
	 * Why the credit was applied to the invoice
	 *
	 * JSON-schema: string
	 */
	readonly reason?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "2019-07-12T20:40:11.572Z"
	 */
	readonly credited_at?: string
}
