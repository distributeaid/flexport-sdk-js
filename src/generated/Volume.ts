import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Volume = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Volume
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
