/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { CreateQuantity } from './CreateQuantity'
import { Money } from './Money'
import { Weight } from './Weight'
import { Volume } from './Volume'
import { Metadata } from './Metadata'
import { TypedApiObject } from '../types/TypedApiObject'
export type CreateCommercialInvoiceLineItem = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CreateCommercialInvoiceLineItem
	/**
	 * Document line number that this data represents. Counting from 1.
	 *
	 * JSON-schema: integer
	 * @example 4
	 */
	readonly document_line_number?: number
	/**
	 * JSON-schema: string
	 * @example "9876-ABC"
	 */
	readonly purchase_order_number?: string
	/**
	 * JSON-schema: string
	 * @example "522932-1"
	 */
	readonly container_number?: string
	/**
	 * JSON-schema: string
	 * @example "CN"
	 */
	readonly country_of_origin?: string
	/**
	 * The SKU of the product associated with this line item as it is stored in Flexport's system.
	 *
	 * JSON-schema: string
	 * @example "PRODUCT-123"
	 */
	readonly product_sku: string
	readonly quantity: CreateQuantity
	readonly net_value?: Money
	readonly first_sale_value?: Money
	readonly value: Money
	readonly price_per_unit: Money
	readonly gross_weight?: Weight
	readonly net_weight?: Weight
	readonly net_net_weight?: Weight
	readonly volume?: Volume
	readonly metadata?: Metadata
}
export type LiftedCreateCommercialInvoiceLineItem = TypedApiObject &
	CreateCommercialInvoiceLineItem
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateCommercialInvoiceLineItem = (
	original: CreateCommercialInvoiceLineItem,
): LiftedCreateCommercialInvoiceLineItem => {
	return original
}
