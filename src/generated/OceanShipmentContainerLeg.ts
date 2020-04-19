import { Type } from './Type'
import { ContainerRef } from './ContainerRef'
import { LegRef } from './LegRef'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
