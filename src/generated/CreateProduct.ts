/**
 * Auto-generated file. Do not change.
 */
import { WriteProductProperty } from './WriteProductProperty'
import { WriteProductClassification } from './WriteProductClassification'
import { WriteProductSupplier } from './WriteProductSupplier'
export type CreateProduct = {
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
	 * Description of product
	 *
	 * JSON-schema: string
	 * @example "The best 12V AC Adapter on the market"
	 */
	readonly description?: string
	/**
	 * The category of the product
	 *
	 * JSON-schema: string
	 * @example "Cosmetics"
	 */
	readonly product_category: string
	/**
	 * Nation in which the product is manufactured
	 *
	 * JSON-schema: string
	 * @example "China"
	 */
	readonly country_of_origin: string
	/**
	 * Indicates whether Client has verified this Product.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly client_verified?: boolean
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
	/**
	 * Array of suppliers. If a value is specified, the array of suppliers will replace the existing set of suppliers.
	 *
	 * JSON-schema: array
	 */
	readonly suppliers?: WriteProductSupplier[]
}
export type LiftedCreateProduct = CreateProduct
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateProduct = (
	original: CreateProduct,
): LiftedCreateProduct => {
	return original
}
