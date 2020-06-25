/**
 * Auto-generated file. Do not change.
 */
/**
 * Set of custom key-values specific to the object. The keys are strings and values are arrays of strings. The set of valid keys is always the consignee's list of keys, even if call was made by a different party.
 *
 * @example {"purchase_order":["12345"],"sku":["abc123"]}
 *
 */
export type Metadata = Record<string, any>
export type LiftedMetadata = Metadata
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 * Set of custom key-values specific to the object. The keys are strings and values are arrays of strings. The set of valid keys is always the consignee's list of keys, even if call was made by a different party.
 
 */
export const liftMetadata = (original: Metadata): LiftedMetadata => {
	return original
}
