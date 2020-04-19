import { WriteProductProperty } from './WriteProductProperty'
import { WriteProductClassification } from './WriteProductClassification'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type WriteProduct = {
	/**
	 * Always required. Name of product
	 *
	 * JSON-schema: string
	 * @example "AC Adapter 12V"
	 */
	readonly name: string
	/**
	 * Always required. SKU of product
	 *
	 * JSON-schema: string
	 * @example "WDVCDFD-RM00472"
	 */
	readonly sku: string
	/**
	 * Always required. The category of the product
	 *
	 * JSON-schema: string
	 * @example "Cosmetics"
	 */
	readonly product_category: string
	/**
	 * Always required. Nation in which the product is manufactured
	 *
	 * JSON-schema: string
	 * @example "China"
	 */
	readonly country_of_origin: string
	/**
	 * Array of product properties, custom key value pairs that describe the product
	 *
	 * JSON-schema: array
	 */
	readonly product_properties?: WriteProductProperty[]
	/**
	 * Array of product classifications. If a value is specified, the array of product classifications will replace the existing set of product classifications.
	 *
	 * JSON-schema: array
	 */
	readonly classifications?: WriteProductClassification[]
}
