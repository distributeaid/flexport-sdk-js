/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type VatNumberBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/company_entity/vat_number'
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
