import { AddressForRequestBodyBase } from './AddressForRequestBodyBase'
import { WriteVatNumberBase } from './WriteVatNumberBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateCompanyEntityBase = {
	/**
	 * Always required. Legal name of the new company entity
	 *
	 * JSON-schema: string
	 * @example "Zoomit"
	 */
	readonly name: string
	/**
	 * The id of the new company entity's parent company. Either company_id or company_ref is required
	 *
	 * JSON-schema: string
	 * @example "2UXaj4xcHoW8nwh9UVOMpw"
	 */
	readonly company_id?: string
	/**
	 * The ref of the new company entity's parent company. Either company_id or company_ref is required
	 *
	 * JSON-schema: string
	 * @example "Zoomit"
	 */
	readonly company_ref?: string
	/**
	 * Always Required. The object representing the mailing address of the company entity.
	 *
	 */
	readonly mailing_address: AddressForRequestBodyBase
	/**
	 * Not required. The ref that will be created for the new company entity
	 *
	 * JSON-schema: string
	 * @example "my-zoomit-ref"
	 */
	readonly ref?: string
	/**
	 * Not required. An array of VAT Numbers for the new company entity.
	 *
	 * JSON-schema: array
	 */
	readonly vat_numbers?: WriteVatNumberBase[]
}
