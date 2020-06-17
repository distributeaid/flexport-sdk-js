/**
 * Auto-generated file. Do not change.
 */
export enum CreateTruckingBookingPayment_termsTypes {
	COLLECT = 'collect',
	PREPAID = 'prepaid',
}
export type CreateTruckingBooking = {
	/**
	 * Whether the booking is for an LTL shipment. If false, the booking is FTL. If true, then the booking is LTL.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly is_ltl: boolean
	/**
	 * Whether the shipper or consignee is responsible for payment of trucking freight. This can be `collect` (consignee) or `prepaid` (shipper).
	 *
	 * JSON-schema: string
	 * @example "collect"
	 */
	readonly payment_terms: CreateTruckingBookingPayment_termsTypes
	/**
	 * General description of the products in the shipment.
	 *
	 * JSON-schema: string
	 * @example "watches"
	 */
	readonly description_of_products?: string
}
export type LiftedCreateTruckingBooking = CreateTruckingBooking
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateTruckingBooking = (
	original: CreateTruckingBooking,
): LiftedCreateTruckingBooking => {
	return original
}
