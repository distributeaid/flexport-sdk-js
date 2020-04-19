import { AddressForRequestBody } from './AddressForRequestBody'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type UpdateLocation = {
	/**
	 * New name of the location
	 *
	 * JSON-schema: string
	 * @example "Zoomit V2"
	 */
	readonly name?: string
	readonly address?: AddressForRequestBody
	/**
	 * If a value for contact_ids is specified, the array specified will replace all the existing contacts at the location
	 *
	 * JSON-schema: array
	 * @example ["asdlkfaiowejfa","398qehfiaiurh","yfhvalnertughv"]
	 */
	readonly contact_ids?: string[]
	/**
	 * The new ref for the location
	 *
	 * JSON-schema: string
	 * @example "zoomit-management-co"
	 */
	readonly ref?: string
	/**
	 * Metadata to replace existing metadata. Keys must be strings and values should be arrays.
	 *
	 * JSON-schema: object
	 * @example {"color":["blue","green"]}
	 */
	readonly metadata?: object
}
