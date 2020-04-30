/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type ContainerLegCollectionRef = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CollectionRef
	/**
	 * Type of the object in this list.
	 *
	 * JSON-schema: string
	 * @example "/ocean/shipment_container_leg"
	 */
	readonly ref_type?: string
	/**
	 * URL to fetch list of objects.
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/ocean/shipment_container_legs?f.shipment_container.id=123"
	 */
	readonly link?: string
}
export type LiftedContainerLegCollectionRef = TypedApiObject &
	ContainerLegCollectionRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftContainerLegCollectionRef = (
	original: ContainerLegCollectionRef,
): LiftedContainerLegCollectionRef => {
	return original
}
