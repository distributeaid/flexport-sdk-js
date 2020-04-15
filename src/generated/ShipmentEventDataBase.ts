import { ShipmentBase } from './ShipmentBase'
import { ShipmentLegBase } from './ShipmentLegBase'
import { OceanShipmentContainerLegBase } from './OceanShipmentContainerLegBase'
import { ShipmentNodeBase } from './ShipmentNodeBase'
import { ShipmentContainerBase } from './ShipmentContainerBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentEventDataBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/shipment_event_data'
	readonly resource?:
		| ShipmentBase
		| ShipmentLegBase
		| OceanShipmentContainerLegBase
	readonly shipment?: ShipmentBase
	/**
	 * Possibly null. Location associated with the event.
	 *
	 */
	readonly location?: ShipmentNodeBase
	/**
	 * An array of the containers associated with this event.  Array is empty for shipment-level events.
	 *
	 * JSON-schema: array
	 */
	readonly containers?: ShipmentContainerBase[]
}
