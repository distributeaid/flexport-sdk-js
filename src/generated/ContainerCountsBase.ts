/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ContainerCountsBase = {
	/**
	 * String representing the object’s type. Always `/container_counts` for this object.
	 */
	readonly _object: '/container_counts'
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
