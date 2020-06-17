/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export enum TruckingBookingDetailPayment_termsTypes {
	COLLECT = 'collect',
	PREPAID = 'prepaid',
}
export type TruckingBookingDetail = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.TruckingBookingDetail
	/**
	 * JSON-schema: boolean
	 * @example false
	 */
	readonly is_ftl?: boolean
	/**
	 * JSON-schema: string
	 * @example "collect"
	 */
	readonly payment_terms?: TruckingBookingDetailPayment_termsTypes
	/**
	 * JSON-schema: string
	 * @example "Wristwatches"
	 */
	readonly description_of_products?: string
}
export type LiftedTruckingBookingDetail = TypedApiObject & TruckingBookingDetail
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTruckingBookingDetail = (
	original: TruckingBookingDetail,
): LiftedTruckingBookingDetail => {
	return original
}
