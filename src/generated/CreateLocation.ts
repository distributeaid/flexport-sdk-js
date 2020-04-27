/**
 * Auto-generated file. Do not change.
 */
import { AddressForRequestBody } from './AddressForRequestBody'
export type CreateLocation = {
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
	readonly address: AddressForRequestBody
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
export type LiftedCreateLocation = CreateLocation
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateLocation = (
	original: CreateLocation,
): LiftedCreateLocation => {
	return original
}
