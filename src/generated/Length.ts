import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
