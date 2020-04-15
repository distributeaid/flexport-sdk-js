import { AddressForRequestBodyBase } from './AddressForRequestBodyBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateLocationBase = {
	/**
	 * Name of the location
	 *
	 * JSON-schema: string
	 * @example "Zoomit"
	 */
	readonly name: string
	/**
	 * The id of the company entity to create this location for
	 *
	 * JSON-schema: string
	 * @example "xyz_123_ABC"
	 */
	readonly company_id: string
	readonly address: AddressForRequestBodyBase
	/**
	 * Array of contact id's to assign to this location
	 *
	 * JSON-schema: array
	 * @example ["asdlkfaiowejfa","398qehfiaiurh","yfhvalnertughv"]
	 */
	readonly contact_ids?: string[]
	/**
	 * Not required. The ref that will be created for the new location
	 *
	 * JSON-schema: string
	 * @example "zoomit-management-co"
	 */
	readonly ref?: string
	/**
	 * Optional metadata to add to a location. Keys must be strings and values should be arrays of strings.
	 *
	 * JSON-schema: object
	 * @example {"color":["blue","green"]}
	 */
	readonly metadata?: object
}
