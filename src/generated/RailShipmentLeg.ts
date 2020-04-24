/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ContainerLegCollectionRef } from './ContainerLegCollectionRef'
export type RailShipmentLeg = {
	readonly _object: Type.RailShipmentLeg
	readonly container_legs?: ContainerLegCollectionRef
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftRailShipmentLeg = (original: RailShipmentLeg) => {
	return original
}
