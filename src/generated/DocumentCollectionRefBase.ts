/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type DocumentCollectionRefBase = {
	readonly _object: '/api/refs/collection'
	/**
	 * JSON-schema: string
	 * @example "/document"
	 */
	readonly ref_type?: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/document?f.shipment.id=2983"
	 */
	readonly link?: string
}
