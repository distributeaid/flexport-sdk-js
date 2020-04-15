/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type LegCollectionRefBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/api/refs/collection'
	/**
	 * Type of the object in this list.
	 *
	 * JSON-schema: string
	 * @example "/shipment_leg"
	 */
	readonly ref_type?: string
	/**
	 * URL to fetch list of objects.
	 *
	 * JSON-schema: string
	 * @example "https://api.flexport.com/shipment_legs?f.shipment.id=123"
	 */
	readonly link?: string
}
