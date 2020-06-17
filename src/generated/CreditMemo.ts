/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Money } from './Money'
import { TypedApiObject } from '../types/TypedApiObject'
export type CreditMemo = {
	/**
	 * The type of the object
	 */
	readonly _object: Type.CreditMemo
	readonly amount?: Money
	/**
	 * Category of the credit memo
	 *
	 * JSON-schema: string
	 * @example "additional"
	 */
	readonly category?: string
	/**
	 * Why the credit was applied to the invoice
	 *
	 * JSON-schema: string
	 */
	readonly reason?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "2019-07-12T20:40:11.572Z"
	 */
	readonly credited_at?: string
}
export type LiftedCreditMemo = TypedApiObject &
	Omit<CreditMemo, 'credited_at'> & {
		readonly credited_at?: Date
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreditMemo = (original: CreditMemo): LiftedCreditMemo => {
	const { credited_at, ...rest } = original
	return {
		...rest,
		credited_at: credited_at !== undefined ? new Date(credited_at) : undefined,
	}
}
