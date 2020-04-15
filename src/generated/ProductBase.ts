import { ProductPropertyBase } from './ProductPropertyBase'
import { HsCodeBase } from './HsCodeBase'
import { ProductClassificationBase } from './ProductClassificationBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ProductBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/product'
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
	readonly product_properties?: ProductPropertyBase[]
	/**
	 * DEPRECATED - HS codes can be found in the classifications array
	 *
	 * JSON-schema: array
	 */
	readonly hs_codes?: HsCodeBase[]
	/**
	 * JSON-schema: array
	 */
	readonly classifications?: ProductClassificationBase[]
}
