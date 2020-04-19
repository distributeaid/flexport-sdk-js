import { Type } from './Type'
import { Place } from './Place'
import { Terminal } from './Terminal'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentNode = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ShipmentNode
	/**
	 * JSON-schema: array
	 */
	readonly tags?: string[]
	readonly place: Place
	readonly terminal?: Terminal
}
