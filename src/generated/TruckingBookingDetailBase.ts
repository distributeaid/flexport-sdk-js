/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type TruckingBookingDetailBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/trucking/booking'
	/**
	 * JSON-schema: boolean
	 */
	readonly is_ftl?: boolean
	/**
	 * JSON-schema: string
	 * @example "collect"
	 */
	readonly payment_terms?: 'collect' | 'prepaid'
	/**
	 * JSON-schema: string
	 * @example "Wristwatches"
	 */
	readonly description_of_products?: string
}
