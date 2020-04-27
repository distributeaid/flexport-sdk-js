/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type BookingRef = {
	readonly _object: Type.ObjectRef
	/**
	 * JSON-schema: string
	 * @example "/booking"
	 */
	readonly ref_type: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/bookings/123"
	 */
	readonly link: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id: number
}
export type LiftedBookingRef = TypedApiObject & BookingRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingRef = (original: BookingRef): LiftedBookingRef => {
	return original
}
