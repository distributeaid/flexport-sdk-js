/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Place } from './Place'
import { Terminal } from './Terminal'
import { TypedApiObject } from '../types/TypedApiObject'
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
export type LiftedShipmentNode = TypedApiObject & ShipmentNode
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentNode = (original: ShipmentNode): LiftedShipmentNode =>
	original
