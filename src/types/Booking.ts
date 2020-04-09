import { ApiObject } from './ApiObject'

export const BOOKING_TYPE = '/booking'

export type Booking = ApiObject & {
	/**
	 * String representing the object’s type. Always `/booking` for this object.
	 */
	_object: typeof BOOKING_TYPE
}
