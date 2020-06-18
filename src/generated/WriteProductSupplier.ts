/**
 * Auto-generated file. Do not change.
 */
export type WriteProductSupplier = {
	/**
	 * The supplier location ID. Either id or ref is required.
	 *
	 * JSON-schema: string
	 * @example 12345
	 */
	readonly id?: string
	/**
	 * Your custom string used to refer to the supplier location. Either id or ref is required.
	 *
	 * JSON-schema: string
	 * @example "FACTORY-123"
	 */
	readonly ref?: string
	/**
	 * Always required. ISO Alpha-2 country in which the product is manufactured
	 *
	 * JSON-schema: string
	 * @example "CN"
	 */
	readonly country_of_origin: string
}
export type LiftedWriteProductSupplier = WriteProductSupplier
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWriteProductSupplier = (
	original: WriteProductSupplier,
): LiftedWriteProductSupplier => {
	return original
}
