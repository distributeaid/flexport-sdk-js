import { ShipmentRefBase } from './ShipmentRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CustomsEntryBase = {
	/**
	 * Type of the object. Always /customs_entry for this object.
	 */
	readonly _object: '/customs_entry'
	/**
	 * Unique identifier for the customs entry.
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	/**
	 * JSON-schema: string
	 */
	readonly entry_number?: string
	/**
	 * The release status for this entry.
	 *
	 * JSON-schema: string
	 */
	readonly release_status?: 'cleared' | 'customs_hold' | 'pending'
	/**
	 * The cargo release date for this entry.
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly release_date?: string
	readonly shipment?: ShipmentRefBase
}
