/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type BookingLineItemCollectionRefBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/api/refs/collection'
	/**
	 * Type of the object in this list.
	 *
	 * JSON-schema: string
	 * @example "/purchase_orders/booking_line_item"
	 */
	readonly ref_type?: string
	/**
	 * URL to fetch list of objects.
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/booking_line_items?f.booking.id=123"
	 */
	readonly link?: string
}
