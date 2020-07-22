/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type CreateBookingAmendmentHsCode = {
	/**
	 * String representing the object’s type. Always `/bookings/update/product_description` for this object.
	 */
	readonly _object: Type.CreateBookingAmendmentHsCode
	/**
	 * Always required. English description of product in booking.
	 *
	 * JSON-schema: string
	 * @example "Wristwatches"
	 */
	readonly description: string
	/**
	 * Required if booking if origin address or origin port is in Mainland China. Chinese description of product in booking.
	 *
	 * JSON-schema: string
	 * @example "手表"
	 */
	readonly description_for_export_customs?: string
	/**
	 * The six digit code under which the product should be classified for export customs.
	 *
	 * JSON-schema: string
	 * @example 9101
	 */
	readonly hs_code: string
}
export type LiftedCreateBookingAmendmentHsCode = TypedApiObject &
	CreateBookingAmendmentHsCode
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateBookingAmendmentHsCode = (
	original: CreateBookingAmendmentHsCode,
): LiftedCreateBookingAmendmentHsCode => {
	return original
}
