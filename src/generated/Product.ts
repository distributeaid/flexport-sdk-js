/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ProductProperty } from './ProductProperty'
import { HsCode } from './HsCode'
import { ProductClassification } from './ProductClassification'
import { TypedApiObject } from '../types/TypedApiObject'
export type Product = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Product
	/**
	 * The Flexport id used to refer to the product
	 *
	 * JSON-schema: integer
	 * @example 84291
	 */
	readonly id?: number
	/**
	 * The name of the product
	 *
	 * JSON-schema: string
	 * @example "AC Adapter 12V"
	 */
	readonly name?: string
	/**
	 * The SKU used to refer to the product
	 *
	 * JSON-schema: string
	 * @example "WDVCDFD-RM00472"
	 */
	readonly sku?: string
	/**
	 * If the product has been archived, the time it was archived. If the product is still active this will be null.
	 *
	 * JSON-schema: string
	 * @example "2019-01-18T22:08:38.599Z"
	 */
	readonly archived_at?: string
	/**
	 * The category to group this product under
	 *
	 * JSON-schema: string
	 * @example "Cosmetics"
	 */
	readonly product_category?: string
	/**
	 * The country the product was manufactured in
	 *
	 * JSON-schema: string
	 * @example "China"
	 */
	readonly country_of_origin?: string
	/**
	 * A user defined set of key-value objects to describe the product
	 *
	 * JSON-schema: array
	 */
	readonly product_properties?: ProductProperty[]
	/**
	 * DEPRECATED - HS codes can be found in the classifications array
	 * @deprecated Do not use! This field is deprecated.
	 *
	 * JSON-schema: array
	 */
	readonly hs_codes?: HsCode[]
	/**
	 * JSON-schema: array
	 */
	readonly classifications?: ProductClassification[]
}
export type LiftedProduct = TypedApiObject & Product
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftProduct = (original: Product): LiftedProduct => {
	return original
}
