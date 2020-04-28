/**
 * Auto-generated file. Do not change.
 */
export type UpdateCompany = {
	/**
	 * Updated name of the company.
	 *
	 * JSON-schema: string
	 * @example "Updated Zoomit"
	 */
	readonly name?: string
	/**
	 * Updated ref of the company
	 *
	 * JSON-schema: string
	 * @example "zoomit_ref"
	 */
	readonly ref?: string
}
export type LiftedUpdateCompany = UpdateCompany
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateCompany = (
	original: UpdateCompany,
): LiftedUpdateCompany => original
