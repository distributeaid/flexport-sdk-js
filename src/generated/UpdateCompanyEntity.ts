/**
 * Auto-generated file. Do not change.
 */
import { AddressForRequestBody } from './AddressForRequestBody'
import { WriteVatNumber } from './WriteVatNumber'
export type UpdateCompanyEntity = {
	/**
	 * The new legal name of the company entity
	 *
	 * JSON-schema: string
	 * @example "Zoomit V2"
	 */
	readonly name?: string
	readonly mailing_address?: AddressForRequestBody
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
	readonly vat_numbers?: WriteVatNumber[]
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateCompanyEntity = (original: UpdateCompanyEntity) => {
	return original
}
