/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
	readonly payment_terms: 'collect' | 'prepaid'
	/**
	 * General description of the products in the shipment.
	 *
	 * JSON-schema: string
	 * @example "watches"
	 */
	readonly description_of_products?: string
}
