/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Roadport = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Roadport
	/**
	 * JSON-schema: string
	 * @example "3901"
	 */
	readonly port_code?: string
}
export type LiftedRoadport = TypedApiObject & Roadport
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftRoadport = (original: Roadport): LiftedRoadport => original
