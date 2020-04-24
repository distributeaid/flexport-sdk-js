/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
export type ProductProperty = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ProductProperty
	/**
	 * Type of this property
	 *
	 * JSON-schema: string
	 * @example "color"
	 */
	readonly type?: string
	/**
	 * Value of this property
	 *
	 * JSON-schema: string
	 * @example "blue"
	 */
	readonly value?: string
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftProductProperty = (original: ProductProperty) => {
	return original
}
