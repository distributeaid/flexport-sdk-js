/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type LengthBase = {
	/**
	 * String representing the object’s type. Always `/quantity/length` for this object.
	 */
	readonly _object: '/quantity/length'
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
