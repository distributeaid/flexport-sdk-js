/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Coordinates = {
	readonly _object: Type.Coordinates
	/**
	 * JSON-schema: string
	 * @example "76.003"
	 */
	readonly latitude?: string
	/**
	 * JSON-schema: string
	 * @example "-122.092"
	 */
	readonly longitude?: string
}
export type LiftedCoordinates = TypedApiObject & Coordinates
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCoordinates = (original: Coordinates): LiftedCoordinates => {
	return original
}
