/**
 * Auto-generated file. Do not change.
 */
export type CreateCompany = {
	/**
	 * Always required. Name of the company.
	 *
	 * JSON-schema: string
	 * @example "Zoomit"
	 */
	readonly name: string
	/**
	 * Your custom string used to refer to the company
	 *
	 * JSON-schema: string
	 * @example "zoomit-ref"
	 */
	readonly ref?: string
}
export type LiftedCreateCompany = CreateCompany
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateCompany = (
	original: CreateCompany,
): LiftedCreateCompany => {
	return original
}
