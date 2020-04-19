import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
