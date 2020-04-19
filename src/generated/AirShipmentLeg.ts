import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type AirShipmentLeg = {
	readonly _object: Type.AirShipmentLeg
	/**
	 * JSON-schema: string
	 * @example "2Q"
	 */
	readonly iata_code?: string
	/**
	 * JSON-schema: string
	 * @example "SNC"
	 */
	readonly icao_code?: string
	/**
	 * JSON-schema: string
	 * @example "Y8 1234"
	 */
	readonly flight_number?: string
}
