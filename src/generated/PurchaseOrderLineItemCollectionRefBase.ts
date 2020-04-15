/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PurchaseOrderLineItemCollectionRefBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/api/refs/collection'
	/**
	 * Type of the object in this list
	 *
	 * JSON-schema: string
	 * @example "/purchase_orders/line_item"
	 */
	readonly ref_type?: string
	/**
	 * URL to fetch list of objects
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/purchase_order_line_items?f.purchase_order.id=123"
	 */
	readonly link?: string
}
