import { Type } from './Type'
import { ContainerLegCollectionRef } from './ContainerLegCollectionRef'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
