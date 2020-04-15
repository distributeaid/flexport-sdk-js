/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type VolumeBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/quantity/volume'
	/**
	 * total volume
	 *
	 * JSON-schema: number
	 * @example 472.62
	 */
	readonly value?: number
	/**
	 * unit of measurement. "cbm" for cubic meters. "cbft" for cubic feet.
	 *
	 * JSON-schema: string
	 */
	readonly unit?: 'cbm' | 'cbft'
}
