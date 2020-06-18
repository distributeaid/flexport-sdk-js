/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Manufacturer = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Manufacturer
	/**
	 * JSON-schema: string
	 * @example "FRLAVIE243BRE"
	 */
	readonly manufacturer_code?: string
}
export type LiftedManufacturer = TypedApiObject & Manufacturer
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftManufacturer = (
	original: Manufacturer,
): LiftedManufacturer => {
	return original
}
