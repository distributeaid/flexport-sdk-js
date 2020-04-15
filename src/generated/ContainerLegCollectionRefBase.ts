/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ContainerLegCollectionRefBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/api/refs/collection'
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
