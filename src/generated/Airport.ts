/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
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
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAirport = (original: Airport) => {
	return original
}
