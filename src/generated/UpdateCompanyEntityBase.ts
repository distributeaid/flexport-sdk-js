import { AddressForRequestBodyBase } from './AddressForRequestBodyBase'
import { WriteVatNumberBase } from './WriteVatNumberBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type UpdateCompanyEntityBase = {
	/**
	 * The new legal name of the company entity
	 *
	 * JSON-schema: string
	 * @example "Zoomit V2"
	 */
	readonly name?: string
	readonly mailing_address?: AddressForRequestBodyBase
	/**
	 * The new ref that will be used for the company entity
	 *
	 * JSON-schema: string
	 * @example "zoomit-us"
	 */
	readonly ref?: string
	/**
	 * If a value for vat_numbers is specified, the array specified will replace all the existing VAT numbers of the company entity
	 *
	 * JSON-schema: array
	 */
	readonly vat_numbers?: WriteVatNumberBase[]
}
