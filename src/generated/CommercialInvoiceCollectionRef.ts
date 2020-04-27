/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type CommercialInvoiceCollectionRef = {
	readonly _object: Type.CollectionRef
	/**
	 * JSON-schema: string
	 * @example "/commercial_invoice"
	 */
	readonly ref_type: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/commercial_invoices?f.shipment.id=2983"
	 */
	readonly link: string
}
export type LiftedCommercialInvoiceCollectionRef = TypedApiObject &
	CommercialInvoiceCollectionRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceCollectionRef = (
	original: CommercialInvoiceCollectionRef,
): LiftedCommercialInvoiceCollectionRef => {
	return original
}
