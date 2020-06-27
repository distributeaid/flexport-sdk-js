/**
 * Auto-generated file. Do not change.
 */
import { Money } from './Money'
import { CreateCommercialInvoiceLineItem } from './CreateCommercialInvoiceLineItem'
import { Metadata } from './Metadata'
export type UpdateCommercialInvoice = {
	/**
	 * Invoice number on the commercial invoice, typically used for display purposes. Can only contain letters, numbers, and hyphens. Uniqueness is based on the supplier Involved Party. There can be multiple commercial invoices with the same invoice_number only if they have different suppliers.
	 *
	 * JSON-schema: string
	 * @example "INVOICE-04-05-2020"
	 */
	readonly invoice_number?: string
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
