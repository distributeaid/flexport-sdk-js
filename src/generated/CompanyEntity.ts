import { Type } from './Type'
import { Address } from './Address'
import { VatNumber } from './VatNumber'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CompanyEntity = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CompanyEntity
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
	readonly mailing_address?: Address
	/**
	 * JSON-schema: array
	 */
	readonly vat_numbers?: VatNumber[]
}
