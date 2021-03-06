/**
 * Auto-generated file. Do not change.
 */
import { OceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { Shipment } from './Shipment'
import { ShipmentContainer } from './ShipmentContainer'
import { ShipmentLeg } from './ShipmentLeg'
import { ShipmentNode } from './ShipmentNode'
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
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
export type LiftedShipmentEventData = TypedApiObject & ShipmentEventData
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentEventData = (
	original: ShipmentEventData,
): LiftedShipmentEventData => {
	return original
}
