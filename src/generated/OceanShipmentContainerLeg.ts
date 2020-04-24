/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ContainerRef } from './ContainerRef'
import { LegRef } from './LegRef'
export type OceanShipmentContainerLeg = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.OceanShipmentContainerLeg
	readonly shipment_container?: ContainerRef
	readonly leg?: LegRef
	/**
	 * JSON-schema: array
	 */
	readonly dates?: object[]
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentContainerLeg = (
	original: OceanShipmentContainerLeg,
) => {
	return original
}
