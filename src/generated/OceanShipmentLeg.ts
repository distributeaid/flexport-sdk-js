/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { linkCollection } from '../links'
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
	readonly container_legs?: ApiCollectionRef
}
export type LiftedOceanShipmentLeg = TypedApiObject &
	Omit<OceanShipmentLeg, 'container_legs'> & {
		readonly container_legs: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentLeg = (
	original: OceanShipmentLeg,
): LiftedOceanShipmentLeg => {
	const { container_legs, ...rest } = original
	return {
		...rest,
		container_legs: linkCollection(container_legs),
	}
}
