import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
