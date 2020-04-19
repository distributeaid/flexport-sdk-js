/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateBookingLineItem = {
	/**
	 * Always required. The identifier of the PO line item to book
	 *
	 * JSON-schema: integer
	 * @example 1234
	 */
	readonly purchase_order_line_item_id: number
	/**
	 * Always required. The identifier of the booking to add the PO line item to
	 *
	 * JSON-schema: integer
	 * @example 4321
	 */
	readonly booking_id: number
	/**
	 * Always required. Number of units to book
	 *
	 * JSON-schema: integer
	 * @example 234
	 */
	readonly units: number
}
