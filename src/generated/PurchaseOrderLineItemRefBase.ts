/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PurchaseOrderLineItemRefBase = {
	readonly _object: '/api/refs/object'
	/**
	 * JSON-schema: string
	 * @example "/purchase_orders/line_item"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/purchase_order_line_items/123"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id?: number
}
