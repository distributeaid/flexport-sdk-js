/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type ProductRef = {
	readonly _object: Type.ProductRef
	/**
	 * JSON-schema: string
	 * @example "/product"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/products/12345"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 12345
	 */
	readonly id?: number
}
export type LiftedProductRef = TypedApiObject & ProductRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftProductRef = (original: ProductRef): LiftedProductRef => {
	return original
}
