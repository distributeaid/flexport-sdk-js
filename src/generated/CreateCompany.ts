/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
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
