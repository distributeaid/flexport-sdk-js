import { PlaceBase } from './PlaceBase'
import { TerminalBase } from './TerminalBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentNodeBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/shipment_node'
	/**
	 * JSON-schema: array
	 */
	readonly tags?: string[]
	readonly place?: PlaceBase
	readonly terminal?: TerminalBase
}
