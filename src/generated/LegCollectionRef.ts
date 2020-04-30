/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type LegCollectionRef = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CollectionRef
	/**
	 * Type of the object in this list.
	 *
	 * JSON-schema: string
	 * @example "/shipment_leg"
	 */
	readonly ref_type: string
	/**
	 * URL to fetch list of objects.
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/shipment_legs?f.shipment.id=123"
	 */
	readonly link: string
}
export type LiftedLegCollectionRef = TypedApiObject & LegCollectionRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftLegCollectionRef = (
	original: LegCollectionRef,
): LiftedLegCollectionRef => {
	return original
}
