import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Airport = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Airport
	/**
	 * JSON-schema: string
	 * @example "3901"
	 */
	readonly port_code?: string
	/**
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly country_code?: string
	/**
	 * JSON-schema: string
	 * @example "LAX"
	 */
	readonly iata_code?: string
	/**
	 * JSON-schema: string
	 * @example "KLAX"
	 */
	readonly icao_code?: string
}
