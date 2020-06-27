/**
 * Auto-generated file. Do not change.
 */
import { Money } from './Money'
import { CreateCommercialInvoiceLineItem } from './CreateCommercialInvoiceLineItem'
import { Metadata } from './Metadata'
export type UpdateCommercialInvoice = {
	/**
	 * Invoice number on the commercial invoice, typically used for display purposes. Can only contain letters, numbers, and hyphens. There can be multiple commercial invoices with the same invoice_number.
	 *
	 * JSON-schema: string
	 * @example "INVOICE-04-05-2020"
	 */
	readonly invoice_number?: string
	/**
	 * The unique invoice number or identifier for the commercial invoice. Must be globally unique. Can only contain letters, numbers, and hyphens. This may be the same as the invoice number.
	 *
	 * JSON-schema: string
	 * @example "INVOICE-04-05-2020"
	 */
	readonly unique_invoice_number?: string
	/**
	 * The currency being used on the commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "USD"
	 */
	readonly currency_code?: string
	/**
	 * Whether there was a related parties transaction as defined by CBP.
	 *
	 * JSON-schema: boolean
	 * @example false
	 */
	readonly is_related_parties?: boolean
	readonly proration_amount?: Money
	/**
	 * JSON-schema: array
	 */
	readonly manufacturer_refs?: string[]
	/**
	 * JSON-schema: array
	 */
	readonly line_items?: CreateCommercialInvoiceLineItem[]
	readonly metadata?: Metadata
}
export type LiftedUpdateCommercialInvoice = UpdateCommercialInvoice
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateCommercialInvoice = (
	original: UpdateCommercialInvoice,
): LiftedUpdateCommercialInvoice => {
	return original
}
