/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { Type } from './Type'
import { VatNumber } from './VatNumber'
import { TypedApiObject } from '../types/TypedApiObject'
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
export type LiftedCompanyEntity = TypedApiObject & CompanyEntity
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCompanyEntity = (
	original: CompanyEntity,
): LiftedCompanyEntity => {
	return original
}
