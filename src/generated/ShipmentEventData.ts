import { Type } from './Type'
import { Shipment } from './Shipment'
import { ShipmentLeg } from './ShipmentLeg'
import { OceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { ShipmentNode } from './ShipmentNode'
import { ShipmentContainer } from './ShipmentContainer'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentEventData = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ShipmentEventData
	readonly resource?: Shipment | ShipmentLeg | OceanShipmentContainerLeg
	readonly shipment?: Shipment
	/**
	 * Possibly null. Location associated with the event.
	 *
	 */
	readonly location?: ShipmentNode
	/**
	 * An array of the containers associated with this event.  Array is empty for shipment-level events.
	 *
	 * JSON-schema: array
	 */
	readonly containers?: ShipmentContainer[]
}
