import { Type } from './Type'
import { BookingRef } from './BookingRef'
import { PurchaseOrderLineItemRef } from './PurchaseOrderLineItemRef'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
