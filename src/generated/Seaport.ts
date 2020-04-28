/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Seaport = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Seaport
	/**
	 * JSON-schema: string
	 * @example "3901"
	 */
	readonly port_code?: string
}
export type LiftedSeaport = TypedApiObject & Seaport
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftSeaport = (original: Seaport): LiftedSeaport => {
	return original
}
