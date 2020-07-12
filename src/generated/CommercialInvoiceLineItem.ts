/**
 * Auto-generated file. Do not change.
 */
import { CommercialInvoiceLineItemContainerNumber } from './CommercialInvoiceLineItemContainerNumber'
import { Metadata } from './Metadata'
import { Money } from './Money'
import { ProductRef } from './ProductRef'
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { TypedApiObject } from '../types/TypedApiObject'
export type CommercialInvoiceLineItem = {
	/**
	 * Type of the object. Always /commercial_invoice_line_item for this object.
	 */
	readonly _object: Type.CommercialInvoiceLineItem
	/**
	 * JSON-schema: integer
	 * @example 4
	 */
	readonly document_line_number?: number
	readonly price_per_unit?: Money
	readonly first_sale_value?: Money
	readonly value?: Money
	/**
	 * JSON-schema: integer
	 * @example 10
	 */
	readonly total_units?: number
	readonly container_number?: CommercialInvoiceLineItemContainerNumber
	/**
	 * JSON-schema: string
	 * @example "9876-ABC"
	 */
	readonly purchase_order_number?: string
	readonly weight?: Weight
	readonly volume?: Volume
	readonly product?: ProductRef
	readonly metadata?: Metadata
}
export type LiftedCommercialInvoiceLineItem = TypedApiObject &
	CommercialInvoiceLineItem
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceLineItem = (
	original: CommercialInvoiceLineItem,
): LiftedCommercialInvoiceLineItem => {
	return original
}
