/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { BookingRef } from './BookingRef'
import { PurchaseOrderLineItemRef } from './PurchaseOrderLineItemRef'
export type BookingLineItem = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.BookingLineItem
	/**
	 * Unique identifier for the booking line item
	 *
	 * JSON-schema: integer
	 * @example 1234
	 */
	readonly id?: number
	readonly booking?: BookingRef
	readonly purchase_order_line_item?: PurchaseOrderLineItemRef
	/**
	 * Number of units of purchase_order_line_item booked on booking
	 *
	 * JSON-schema: integer
	 */
	readonly units?: number
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingLineItem = (original: BookingLineItem) => {
	return original
}
