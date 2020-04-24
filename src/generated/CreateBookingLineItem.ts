/**
 * Auto-generated file. Do not change.
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
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateBookingLineItem = (original: CreateBookingLineItem) => {
	return original
}
