import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
