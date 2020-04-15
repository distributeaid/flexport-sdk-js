/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type MoneyBase = {
	/**
	 * Type of the object. Always /money for this object.
	 */
	readonly _object: '/money'
	/**
	 * JSON-schema: string (decimal)
	 * @example "12.34"
	 */
	readonly amount?: string
	/**
	 * JSON-schema: string
	 * @example "USD"
	 */
	readonly currency_code?: string
}
