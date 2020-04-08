import { ApiResponseObject } from './ApiResponseObject'

export const SHIPMENT_LEG_TYPE = '/shipment_leg'

export type ShipmentLeg = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/shipment_leg` for this object.
	 */
	_object: typeof SHIPMENT_LEG_TYPE
}
