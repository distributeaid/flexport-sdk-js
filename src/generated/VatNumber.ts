import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type VatNumber = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.VatNumber
	/**
	 * ISO 3166 two-letter country code
	 *
	 * JSON-schema: string
	 * @example "GB"
	 */
	readonly country_code?: string
	/**
	 * JSON-schema: string
	 * @example "GB 123456789"
	 */
	readonly number?: string
}
