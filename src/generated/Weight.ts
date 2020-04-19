import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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