/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Length = {
	/**
	 * String representing the object’s type. Always `/quantity/length` for this object.
	 */
	readonly _object: Type.Length
	/**
	 * Required. Specifies the length as a float.
	 *
	 * JSON-schema: number
	 * @example 100
	 */
	readonly value?: number
	/**
	 * Required. Unit of measurement. "cm" for centimeters. "in" for inches.
	 *
	 * JSON-schema: string
	 * @example "cm"
	 */
	readonly unit?: 'cm' | 'in'
}
export type LiftedLength = TypedApiObject & Length
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftLength = (original: Length): LiftedLength => {
	return original
}
