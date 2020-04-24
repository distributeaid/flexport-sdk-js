/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
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
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAirShipmentLeg = (original: AirShipmentLeg) => {
	return original
}
