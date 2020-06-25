/**
 * Auto-generated file. Do not change.
 */
import { AddressForRequestBody } from './AddressForRequestBody'
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
	readonly metadata?: Record<string, any>
}
export type LiftedUpdateLocation = UpdateLocation
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateLocation = (
	original: UpdateLocation,
): LiftedUpdateLocation => {
	return original
}
