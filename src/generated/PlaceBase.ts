import { AddressBase } from './AddressBase'
import { AirportBase } from './AirportBase'
import { RailportBase } from './RailportBase'
import { RoadportBase } from './RoadportBase'
import { SeaportBase } from './SeaportBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type PlaceBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/place'
	/**
	 * Name of the place
	 *
	 * JSON-schema: string
	 * @example "ORD - Chicago - IL"
	 */
	readonly name?: string
	readonly address?: AddressBase
	/**
	 * JSON-schema: array
	 */
	readonly details?: (AirportBase | RailportBase | RoadportBase | SeaportBase)[]
}
