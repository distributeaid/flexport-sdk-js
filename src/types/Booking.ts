import { ApiObject } from './ApiObject'
import { Type } from './types'

export type Booking = ApiObject & {
	/**
	 * String representing the object’s type. Always `/booking` for this object.
	 */
	_object: Type.Booking
}
