/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
export type PurchaseOrderRef = {
	readonly _object: Type.ObjectRef
	/**
	 * JSON-schema: string
	 * @example "/purchase_order"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/purchase_orders/123"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id?: number
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPurchaseOrderRef = (original: PurchaseOrderRef) => {
	return original
}
