import { BookingRefBase } from './BookingRefBase'
import { PurchaseOrderLineItemRefBase } from './PurchaseOrderLineItemRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type BookingLineItemBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/purchase_orders/booking_line_item'
	/**
	 * Unique identifier for the booking line item
	 *
	 * JSON-schema: integer
	 * @example 1234
	 */
	readonly id?: number
	readonly booking?: BookingRefBase
	readonly purchase_order_line_item?: PurchaseOrderLineItemRefBase
	/**
	 * Number of units of purchase_order_line_item booked on booking
	 *
	 * JSON-schema: integer
	 */
	readonly units?: number
}
