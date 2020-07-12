/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { linkCollection } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export enum TruckingShipmentLegServiceTypeTypes {
	LTL = 'ltl',
	FTL = 'ftl',
	DRAYAGE = 'drayage',
	CARTAGE = 'cartage',
}
export type TruckingShipmentLeg = {
	readonly _object: Type.TruckingShipmentLeg
	/**
	 * JSON-schema: string
	 * @example "FBA123456789"
	 */
	readonly tracking_number?: string
	/**
	 * JSON-schema: string
	 */
	readonly service_type?: TruckingShipmentLegServiceTypeTypes
	/**
	 * JSON-schema: integer
	 * @example 32
	 */
	readonly pieces?: number
	readonly container_legs?: ApiCollectionRef
}
export type LiftedTruckingShipmentLeg = TypedApiObject &
	Omit<TruckingShipmentLeg, 'container_legs'> & {
		readonly container_legs: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTruckingShipmentLeg = (
	original: TruckingShipmentLeg,
): LiftedTruckingShipmentLeg => {
	const { container_legs, ...rest } = original
	return {
		...rest,
		container_legs: linkCollection(container_legs),
	}
}
