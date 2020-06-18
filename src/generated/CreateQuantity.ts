/**
 * Auto-generated file. Do not change.
 */
export enum CreateQuantityUnitTypes {
	PCS = 'pcs',
	DPC = 'dpc',
	DOZ = 'doz',
	HUN = 'hun',
	THS = 'ths',
	PRS = 'prs',
	DPR = 'dpr',
}
export type CreateQuantity = {
	/**
	 * Required. The number of units in the units of measurement.
	 *
	 * JSON-schema: number
	 */
	readonly value: number
	/**
	 * Required. Unit of measurement.
	 *
	 * JSON-schema: string
	 */
	readonly unit: CreateQuantityUnitTypes
}
export type LiftedCreateQuantity = CreateQuantity
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateQuantity = (
	original: CreateQuantity,
): LiftedCreateQuantity => {
	return original
}
