/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
export type ContainerCollectionRef = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CollectionRef
	/**
	 * Type of the object in this list.
	 *
	 * JSON-schema: string
	 * @example "/ocean/shipment_container"
	 */
	readonly ref_type?: string
	/**
	 * URL to fetch list of objects.
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/ocean/shipment_containers?f.shipment.id=123"
	 */
	readonly link?: string
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftContainerCollectionRef = (
	original: ContainerCollectionRef,
) => {
	return original
}
