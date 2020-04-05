import { ApiResponseObject } from './ApiResponseObject'

export type Shipment = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/shipment` for this object.
	 */
	_object: '/shipment'
	/**
	 * Unique identifier for the object.
	 */
	id: number
	/**
	 * Name of the shipment.
	 */
	name: string
}
