/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type VatNumber = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.VatNumber
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
export type LiftedVatNumber = TypedApiObject & VatNumber
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftVatNumber = (original: VatNumber): LiftedVatNumber => {
	return original
}
