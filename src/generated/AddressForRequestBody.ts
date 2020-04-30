/**
 * Auto-generated file. Do not change.
 */
export type AddressForRequestBody = {
	/**
	 * JSON-schema: string
	 * @example "1641 Settlers Lane"
	 */
	readonly street_address: string
	/**
	 * JSON-schema: string
	 * @example "STE 2918"
	 */
	readonly street_address2?: string
	/**
	 * JSON-schema: string
	 * @example "Albany"
	 */
	readonly city?: string
	/**
	 * JSON-schema: string
	 * @example "MN"
	 */
	readonly state?: string
	/**
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly country_code?: string
	/**
	 * JSON-schema: string
	 * @example "56307"
	 */
	readonly zip?: string
	/**
	 * JSON-schema: string
	 * @example "USAL2"
	 */
	readonly unlocode?: string
}
export type LiftedAddressForRequestBody = AddressForRequestBody
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAddressForRequestBody = (
	original: AddressForRequestBody,
): LiftedAddressForRequestBody => {
	return original
}
