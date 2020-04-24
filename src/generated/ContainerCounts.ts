/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
export type ContainerCounts = {
	/**
	 * String representing the object’s type. Always `/container_counts` for this object.
	 */
	readonly _object: Type.ContainerCounts
	/**
	 * Quantity of 20 ft containers requested.
	 *
	 * JSON-schema: integer
	 * @example 1
	 */
	readonly twenty_ft?: number
	/**
	 * Quantity of 40 ft containers requested.
	 *
	 * JSON-schema: integer
	 * @example 2
	 */
	readonly forty_ft?: number
	/**
	 * Quantity of 40 ft HC containers requested.
	 *
	 * JSON-schema: integer
	 * @example 3
	 */
	readonly forty_ft_hc?: number
	/**
	 * Quantity of 45 ft HC containers requested.
	 *
	 * JSON-schema: integer
	 * @example 4
	 */
	readonly forty_five_ft_hc?: number
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftContainerCounts = (original: ContainerCounts) => {
	return original
}
