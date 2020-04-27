/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Address } from './Address'
import { Airport } from './Airport'
import { Railport } from './Railport'
import { Roadport } from './Roadport'
import { Seaport } from './Seaport'
import { TypedApiObject } from '../types/TypedApiObject'
export type Place = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Place
	/**
	 * Name of the place
	 *
	 * JSON-schema: string
	 * @example "ORD - Chicago - IL"
	 */
	readonly name: string
	readonly address: Address
	/**
	 * JSON-schema: array
	 */
	readonly details?: (Airport | Railport | Roadport | Seaport)[]
}
export type LiftedPlace = TypedApiObject & Place
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPlace = (original: Place): LiftedPlace => {
	return original
}
