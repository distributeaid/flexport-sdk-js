/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type BookingLineItemCollectionRef = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CollectionRef
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
export type LiftedBookingLineItemCollectionRef = TypedApiObject &
	BookingLineItemCollectionRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingLineItemCollectionRef = (
	original: BookingLineItemCollectionRef,
): LiftedBookingLineItemCollectionRef => {
	return original
}
