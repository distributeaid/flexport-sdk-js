import { ContainerRefBase } from './ContainerRefBase'
import { LegRefBase } from './LegRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type OceanShipmentContainerLegBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/ocean/shipment_container_leg'
	readonly shipment_container?: ContainerRefBase
	readonly leg?: LegRefBase
	/**
	 * JSON-schema: array
	 */
	readonly dates?: object[]
}
