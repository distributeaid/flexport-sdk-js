/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ProductRefBase = {
	readonly _object: 'api/refs/object'
	/**
	 * JSON-schema: string
	 * @example "/product"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/products/12345"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 12345
	 */
	readonly id?: number
}
