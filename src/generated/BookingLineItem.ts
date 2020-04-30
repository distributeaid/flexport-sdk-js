/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
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
	readonly booking?: ApiObjectRef
	readonly purchase_order_line_item?: ApiObjectRef
	/**
	 * Number of units of purchase_order_line_item booked on booking
	 *
	 * JSON-schema: integer
	 */
	readonly units?: number
}
export type LiftedBookingLineItem = TypedApiObject &
	Omit<BookingLineItem, 'booking' | 'purchase_order_line_item'> & {
		readonly booking: Option<ResolvableObject>
		readonly purchase_order_line_item: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingLineItem = (
	original: BookingLineItem,
): LiftedBookingLineItem => {
	const { booking, purchase_order_line_item, ...rest } = original
	return {
		...rest,
		booking: linkObject(booking),
		purchase_order_line_item: linkObject(purchase_order_line_item),
	}
}
