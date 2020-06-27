/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Weight } from './Weight'
import { TypedApiObject } from '../types/TypedApiObject'
export type CarbonCalculation = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CarbonCalculation
	readonly co2e_emissions?: Weight
}
export type LiftedCarbonCalculation = TypedApiObject & CarbonCalculation
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCarbonCalculation = (
	original: CarbonCalculation,
): LiftedCarbonCalculation => {
	return original
}
