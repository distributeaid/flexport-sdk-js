import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Address = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Address
	/**
	 * JSON-schema: string
	 * @example "1641 Settlers Lane"
	 */
	readonly street_address?: string
	/**
	 * JSON-schema: string
	 * @example "STE 2918"
	 */
	readonly street_address2?: string
	/**
	 * JSON-schema: string
	 * @example "Albany"
	 */
	readonly city?: string
	/**
	 * JSON-schema: string
	 * @example "MN"
	 */
	readonly state?: string
	/**
	 * JSON-schema: string
	 * @example "United States of America"
	 */
	readonly country?: string
	/**
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly country_code?: string
	/**
	 * JSON-schema: string
	 * @example "56307"
	 */
	readonly zip?: string
	/**
	 * JSON-schema: string
	 * @example "America/Los_Angeles"
	 */
	readonly timezone?: string
	/**
	 * JSON-schema: string
	 * @example "address_ref_x"
	 */
	readonly ref?: string
	/**
	 * JSON-schema: string
	 * @example "US AL2"
	 */
	readonly unlocode?: string
}
