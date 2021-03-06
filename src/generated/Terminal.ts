/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
/**
 * Name and address of a specific terminal within a port or airport.  Possibly null
 */
export type Terminal = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Terminal
	/**
	 * Name of the terminal
	 *
	 * JSON-schema: string
	 * @example "Terminal 3"
	 */
	readonly name?: string
	readonly address?: Address
}
export type LiftedTerminal = TypedApiObject & Terminal
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 * Name and address of a specific terminal within a port or airport.  Possibly null
 */
export const liftTerminal = (original: Terminal): LiftedTerminal => {
	return original
}
