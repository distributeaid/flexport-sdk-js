/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export enum VolumeUnitTypes {
	CBM = 'cbm',
	CBFT = 'cbft',
}
export type Volume = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Volume
	/**
	 * total volume
	 *
	 * JSON-schema: number
	 * @example 472.62
	 */
	readonly value?: number
	/**
	 * unit of measurement. "cbm" for cubic meters. "cbft" for cubic feet.
	 *
	 * JSON-schema: string
	 */
	readonly unit?: VolumeUnitTypes
}
export type LiftedVolume = TypedApiObject & Volume
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftVolume = (original: Volume): LiftedVolume => {
	return original
}
