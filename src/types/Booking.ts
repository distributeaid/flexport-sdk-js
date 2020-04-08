import { ApiResponseObject } from './ApiResponseObject'

export const BOOKING_TYPE = '/booking'

export type Booking = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/booking` for this object.
	 */
	_object: typeof BOOKING_TYPE
}
