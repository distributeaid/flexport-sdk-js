/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ContainerLegCollectionRef } from './ContainerLegCollectionRef'
export type OceanShipmentLeg = {
	readonly _object: Type.OceanShipmentLeg
	/**
	 * JSON-schema: string
	 * @example "XJAE"
	 */
	readonly scac_code?: string
	/**
	 * JSON-schema: string
	 * @example "Lenox"
	 */
	readonly vessel_name?: string
	/**
	 * JSON-schema: string
	 * @example "IMO9074729"
	 */
	readonly vessel_imo?: string
	/**
	 * JSON-schema: string
	 * @example "059E"
	 */
	readonly voyage_number?: string
	readonly container_legs?: ContainerLegCollectionRef
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentLeg = (original: OceanShipmentLeg) => {
	return original
}
