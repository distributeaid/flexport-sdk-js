import { ApiObject } from './ApiObject'
import { Type } from './types'
import { Shipment } from './Shipment'
import { ShipmentLeg } from './ShipmentLeg'
import { ShipmentNode } from './ShipmentNode'

/**
 * This is the payload envelope for all events that are associated with a
 * Shipment, ShipmentLeg, Container or ContainerLeg.
 *
 * TODO: Implement containers
 *
 * @see https://apibeta.flexport.com/reference/shipment-event-data
 */
export type ShipmentEvent = ApiObject & {
	/**
	 * String representing the object’s type. Always `/shipment_event_data` for this object.
	 */
	_object: Type.ShipmentEvent

	/**
	 * Resource associated with the event.
	 *
	 * The actual contents of the event will depend on the type of the event.
	 *
	 * TODO: Implement Container and ContainerLeg
	 */
	resource: Shipment | ShipmentLeg

	/**
	 * Shipment associated with this event
	 */
	shipment: Shipment

	/**
	 * Location associated with the event.
	 */
	location?: ShipmentNode
}
