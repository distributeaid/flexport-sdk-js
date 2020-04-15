import { AddressBase } from './AddressBase'
import { VatNumberBase } from './VatNumberBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CompanyEntityBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/company_entity'
	/**
	 * JSON-schema: integer
	 * @example 9281
	 */
	readonly id?: number
	/**
	 * JSON-schema: string
	 * @example "Zoomit"
	 */
	readonly name?: string
	/**
	 * JSON-schema: string
	 * @example "zoomit_ref"
	 */
	readonly ref?: string
	readonly mailing_address?: AddressBase
	/**
	 * JSON-schema: array
	 */
	readonly vat_numbers?: VatNumberBase[]
}
