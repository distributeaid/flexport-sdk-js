/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { linkCollection } from '../links'
export type RailShipmentLeg = {
	readonly _object: Type.RailShipmentLeg
	readonly container_legs?: ApiCollectionRef
}
export type LiftedRailShipmentLeg = TypedApiObject &
	Omit<RailShipmentLeg, 'container_legs'> & {
		readonly container_legs: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftRailShipmentLeg = (
	original: RailShipmentLeg,
): LiftedRailShipmentLeg => {
	const { container_legs, ...rest } = original
	return {
		...rest,
		container_legs: linkCollection(container_legs),
	}
}
