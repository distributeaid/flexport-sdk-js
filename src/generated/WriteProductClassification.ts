/**
 * Auto-generated file. Do not change.
 */
export type WriteProductClassification = {
	/**
	 * Always required. An array of HS codes for this product in the provided region
	 *
	 * JSON-schema: array
	 */
	readonly codes: string[]
	/**
	 * Always required. The region for this classification. Currently only 2-character ISO codes and "EU" are supported
	 *
	 * JSON-schema: string
	 * @example "US"
	 */
	readonly region: string
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWriteProductClassification = (
	original: WriteProductClassification,
) => {
	return original
}
