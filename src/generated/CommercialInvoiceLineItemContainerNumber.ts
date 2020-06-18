/**
 * Auto-generated file. Do not change.
 */
export type CommercialInvoiceLineItemContainerNumber = {
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly id?: number
	/**
	 * JSON-schema: string
	 * @example "ABCD123123"
	 */
	readonly container_number?: string
	/**
	 * JSON-schema: integer
	 * @example 123
	 */
	readonly commercial_invoice_line_item_id?: number
	/**
	 * JSON-schema: string
	 * @example null
	 */
	readonly deleted_at?: string
	/**
	 * JSON-schema: string
	 * @example "2020-01-01:28:03.265Z"
	 */
	readonly created_at?: string
	/**
	 * JSON-schema: string
	 * @example "2020-01-01:28:03.265Z"
	 */
	readonly updated_at?: string
}
export type LiftedCommercialInvoiceLineItemContainerNumber = CommercialInvoiceLineItemContainerNumber
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceLineItemContainerNumber = (
	original: CommercialInvoiceLineItemContainerNumber,
): LiftedCommercialInvoiceLineItemContainerNumber => {
	return original
}
