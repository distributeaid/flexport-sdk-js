/**
 * Auto-generated file. Do not change.
 */
import { HsCode } from './HsCode'
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type BookingAmendmentHsCode = {
	/**
	 * String representing the object’s type. Always `/booking_amendment_product_description` for this object.
	 */
	readonly _object: Type.BookingAmendmentHsCode
	/**
	 * Always required. English description of product in booking.
	 *
	 * JSON-schema: string
	 * @example "Wristwatches"
	 */
	readonly description?: string
	/**
	 * Required if booking if origin address or origin port is in Mainland China. Chinese description of product in booking.
	 *
	 * JSON-schema: string
	 * @example "手表"
	 */
	readonly description_for_export_customs?: string
	readonly hs_code?: HsCode
}
export type LiftedBookingAmendmentHsCode = TypedApiObject &
	BookingAmendmentHsCode
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingAmendmentHsCode = (
	original: BookingAmendmentHsCode,
): LiftedBookingAmendmentHsCode => {
	return original
}
