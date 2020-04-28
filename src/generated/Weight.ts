/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Weight = {
	/**
	 * String representing the object’s type. Always `/quantity/weight` for this object.
	 */
	readonly _object: Type.Weight
	/**
	 * Required. Specifies the weight as a float.
	 *
	 * JSON-schema: number
	 * @example 2300.4
	 */
	readonly value?: number
	/**
	 * Required. Unit of measurement. "kg" for kilograms and "lbs" for pounds.
	 *
	 * JSON-schema: string
	 */
	readonly unit?: 'kg' | 'lbs'
}
export type LiftedWeight = TypedApiObject & Weight
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWeight = (original: Weight): LiftedWeight => original
