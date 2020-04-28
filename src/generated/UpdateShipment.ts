/**
 * Auto-generated file. Do not change.
 */
export type UpdateShipment = {
	/**
	 * Metadata to replace existing metadata. Keys should be strings and values should be arrays. All existing metadata will be replaced by the passed in object.
	 *
	 * JSON-schema: object
	 * @example {"purchase_order":["12345"]}
	 */
	readonly metadata?: object
}
export type LiftedUpdateShipment = UpdateShipment
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateShipment = (
	original: UpdateShipment,
): LiftedUpdateShipment => {
	return original
}
