/**
 * Auto-generated file. Do not change.
 */
export type WriteProductProperty = {
	/**
	 * Always required. User defined type of this property
	 *
	 * JSON-schema: string
	 * @example "color"
	 */
	readonly type: string
	/**
	 * Always required. Value of this property
	 *
	 * JSON-schema: string
	 * @example "blue"
	 */
	readonly value: string
}
export type LiftedWriteProductProperty = WriteProductProperty
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWriteProductProperty = (
	original: WriteProductProperty,
): LiftedWriteProductProperty => {
	return original
}
