/**
 * Auto-generated file. Do not change.
 */
import { Money } from './Money'
import { CreateCommercialInvoiceLineItem } from './CreateCommercialInvoiceLineItem'
import { Metadata } from './Metadata'
export type CreateCommercialInvoice = {
	/**
	 * Flexport's unique identifier for the shipment. Either shipment_id or shipment_ref is required.
	 *
	 * JSON-schema: integer
	 * @example 79683
	 */
	readonly shipment_id?: number
	/**
	 * Your custom string used to refer to the shipment. Can be used to look up or reference the shipment later on. Either shipment_id or shipment_ref is required.
	 *
	 * JSON-schema: string
	 * @example "PO-123"
	 */
	readonly shipment_ref?: string
	/**
	 * Invoice number on the commercial invoice, typically used for display purposes. Can only contain letters, numbers, and hyphens. Uniqueness is based on the supplier Involved Party. There can be multiple commercial invoices with the same invoice_number only if they have different suppliers.
	 *
	 * JSON-schema: string
	 * @example "INVOICE-04-05-2020"
	 */
	readonly invoice_number: string
	/**
	 * The currency being used on the commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "USD"
	 */
	readonly currency_code: string
	/**
	 * Whether there was a related parties transaction as defined by CBP.
	 *
	 * JSON-schema: boolean
	 * @example false
	 */
	readonly is_related_parties?: boolean
	readonly proration_amount: Money
	/**
	 * JSON-schema: array
	 */
	readonly manufacturer_refs?: string[]
	/**
	 * JSON-schema: array
	 */
	readonly line_items: CreateCommercialInvoiceLineItem[]
	readonly metadata?: Metadata
}
export type LiftedCreateCommercialInvoice = CreateCommercialInvoice
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateCommercialInvoice = (
	original: CreateCommercialInvoice,
): LiftedCreateCommercialInvoice => {
	return original
}
