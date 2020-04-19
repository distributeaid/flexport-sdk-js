import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Money = {
	/**
	 * Type of the object. Always /money for this object.
	 */
	readonly _object: Type.Money
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
