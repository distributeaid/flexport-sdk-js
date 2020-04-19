import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CustomsEntryCollectionRef = {
	readonly _object: Type.CollectionRef
	/**
	 * JSON-schema: string
	 * @example "/customs_entry"
	 */
	readonly ref_type: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/customs_entries?f.shipment.id=2983"
	 */
	readonly link: string
}
