import { MoneyBase } from './MoneyBase'
import { CompanyEntityBase } from './CompanyEntityBase'
import { InvoiceItemBase } from './InvoiceItemBase'
import { CreditMemoBase } from './CreditMemoBase'
import { ShipmentRefBase } from './ShipmentRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type InvoiceBase = {
	/**
	 * Type of the object. Always '/invoice' for this object.
	 */
	readonly _object: '/invoice'
	/**
	 * Unique ID for the invoice
	 *
	 * JSON-schema: string
	 * @example "gwdpaYrhTI-T1ljn1M7o7w"
	 */
	readonly id?: string
	/**
	 * Unique name for the invoice
	 *
	 * JSON-schema: string
	 * @example "FLEX-123456-1"
	 */
	readonly name?: string
	/**
	 * When the invoice was issued
	 *
	 * JSON-schema: string (date-time)
	 * @example "2019-05-22T18:39:53.679Z"
	 */
	readonly issued_at?: string
	/**
	 * Due date of the invoice
	 *
	 * JSON-schema: string (date)
	 * @example "2019-05-22"
	 */
	readonly due_date?: string
	/**
	 * Sum of charges on the invoice
	 *
	 */
	readonly total?: MoneyBase
	/**
	 * Outstanding balance on the invoice
	 *
	 */
	readonly balance?: MoneyBase
	/**
	 * Status of the invoice
	 *
	 * JSON-schema: string
	 */
	readonly status?:
		| 'outstanding'
		| 'past_due'
		| 'void'
		| 'paid'
		| 'payment_pending'
	/**
	 * What the invoice is being issued for. Shipment related charges are type `Shipment` and non-shipment related charges are type `Client`
	 *
	 * JSON-schema: string
	 */
	readonly type?: 'Shipment' | 'Client'
	/**
	 * When the invoice was voided (if applicable)
	 *
	 * JSON-schema: string (date-time)
	 * @example "2019-05-22T20:49:15.639Z"
	 */
	readonly voided_at?: string
	/**
	 * Time of the last adjustment to in invoice
	 *
	 * JSON-schema: string (date-time)
	 * @example "2019-05-22T20:49:15.639Z"
	 */
	readonly last_updated_at?: string
	/**
	 * Entity receiving the invoice (i.e. the customer)
	 *
	 */
	readonly recipient?: CompanyEntityBase
	/**
	 * Entity issuing the invoice (i.e. Flexport)
	 *
	 */
	readonly issuer?: CompanyEntityBase
	/**
	 * JSON-schema: array
	 */
	readonly items?: InvoiceItemBase[]
	/**
	 * JSON-schema: array
	 * @example "['Markdown formatted note 1', 'Markdown formatted note 2']"
	 */
	readonly notes?: string[]
	/**
	 * List of any credits applied to this invoice.
	 *
	 * JSON-schema: array
	 */
	readonly credit_memos?: CreditMemoBase[]
	/**
	 * Expandable link to shipment(s) related to this invoice.
	 *
	 */
	readonly shipments?: ShipmentRefBase
}
