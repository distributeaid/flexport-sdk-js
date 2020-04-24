/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { HsCode } from './HsCode'
export type BookingHsCode = {
	/**
	 * String representing the object’s type. Always `/product_descriptions` for this object.
	 */
	readonly _object: Type.BookingHsCode
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
	/**
	 * Required if booking if origin address or origin port is in Mainland China. Code for the locale for description_for_export_customs. Currently only `zh_CN`.
	 *
	 * JSON-schema: string
	 * @example "zh_CN"
	 */
	readonly description_for_export_customs_locale?: string
	readonly hs_code?: HsCode
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftBookingHsCode = (original: BookingHsCode) => {
	return original
}
