/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
export type OceanShipmentContainerLeg = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.OceanShipmentContainerLeg
	readonly shipment_container?: ApiObjectRef
	readonly leg?: ApiObjectRef
	/**
	 * JSON-schema: array
	 */
	readonly dates?: object[]
}
export type LiftedOceanShipmentContainerLeg = TypedApiObject &
	Omit<OceanShipmentContainerLeg, 'shipment_container' | 'leg'> & {
		readonly shipment_container: Option<ResolvableObject>
		readonly leg: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentContainerLeg = (
	original: OceanShipmentContainerLeg,
): LiftedOceanShipmentContainerLeg => {
	const { shipment_container, leg, ...rest } = original
	return {
		...rest,
		shipment_container: linkObject(shipment_container),
		leg: linkObject(leg),
	}
}
