/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type Money = {
	/**
	 * Type of the object. Always /money for this object.
	 */
	readonly _object: Type.Money
	/**
	 * JSON-schema: string (decimal)
	 * @example "12.34"
	 */
	readonly amount?: string
	/**
	 * JSON-schema: string
	 * @example "USD"
	 */
	readonly currency_code?: string
}
export type LiftedMoney = TypedApiObject & Money
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftMoney = (original: Money): LiftedMoney => {
	return original
}
