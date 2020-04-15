/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ContainerRefBase = {
	readonly _object: '/api/refs/object'
	/**
	 * JSON-schema: string
	 * @example "/ocean/shipment_container"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/ocean/shipment_containers/123"
	 */
	readonly link?: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id?: number
}
