/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type ProductClassification = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ProductClassification
	/**
	 * An array of HS codes for this product in the provided region
	 *
	 * JSON-schema: array
	 */
	readonly codes?: string[]
	/**
	 * The region for this classification. Currently only 2-character ISO codes and "EU" are supported
	 *
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly region?: string
}
export type LiftedProductClassification = TypedApiObject & ProductClassification
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftProductClassification = (
	original: ProductClassification,
): LiftedProductClassification => original
