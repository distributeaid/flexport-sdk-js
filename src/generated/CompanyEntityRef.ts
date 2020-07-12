/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type CompanyEntityRef = {
	readonly _object: Type.ObjectRef
	/**
	 * JSON-schema: string
	 * @example "/company_entity"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/network/company_entities/12345"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 12345
	 */
	readonly id?: number
}
export type LiftedCompanyEntityRef = TypedApiObject & CompanyEntityRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCompanyEntityRef = (
	original: CompanyEntityRef,
): LiftedCompanyEntityRef => {
	return original
}
