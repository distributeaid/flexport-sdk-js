import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
