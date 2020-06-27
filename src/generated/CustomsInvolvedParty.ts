/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Address } from './Address'
import { TypedApiObject } from '../types/TypedApiObject'
export type CustomsInvolvedParty = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CustomsInvolvedParty
	readonly address?: Address
	/**
	 * The name of involved party.
	 *
	 * JSON-schema: string
	 * @example "The West Coast Company"
	 */
	readonly name?: string
	/**
	 * The type of involved party.
	 *
	 * JSON-schema: string
	 * @example "consignee"
	 */
	readonly type?: string
}
export type LiftedCustomsInvolvedParty = TypedApiObject & CustomsInvolvedParty
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCustomsInvolvedParty = (
	original: CustomsInvolvedParty,
): LiftedCustomsInvolvedParty => {
	return original
}
