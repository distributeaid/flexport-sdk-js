/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type WriteVatNumberBase = {
	/**
	 * ISO 3166 two-letter country code
	 *
	 * JSON-schema: string
	 * @example "GB"
	 */
	readonly country_code: string
	/**
	 * Full VAT number, including the country code
	 *
	 * JSON-schema: string
	 * @example "GB 123456789"
	 */
	readonly number: string
}
