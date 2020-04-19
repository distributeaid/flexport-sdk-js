import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type HsCode = {
	/**
	 * String representing the object’s type. Always `/hs_code` for this object.
	 */
	readonly _object: Type.HsCode
	/**
	 * Description of HS or HTS code classification.
	 *
	 * JSON-schema: string
	 * @example "N-Butyl-2,2,6,6-tetramethylpiperidin-4-amine (CAS No. 36177-92-1) (provided for in subheading 2933.39.91)"
	 */
	readonly description?: string
	/**
	 * 6 digit (international HS) or 10 digit (US HTS) code.
	 *
	 * JSON-schema: string
	 * @example 9101
	 */
	readonly code?: string
	/**
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly country_code?: string
}
