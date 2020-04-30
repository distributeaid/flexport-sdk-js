/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Money } from './Money'
import { CompanyEntity } from './CompanyEntity'
import { InvoiceItem } from './InvoiceItem'
import { CreditMemo } from './CreditMemo'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
export type Invoice = {
	/**
	 * Type of the object. Always '/invoice' for this object.
	 */
	readonly _object: Type.Invoice
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
	readonly total?: Money
	/**
	 * Outstanding balance on the invoice
	 *
	 */
	readonly balance?: Money
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
	readonly recipient?: CompanyEntity
	/**
	 * Entity issuing the invoice (i.e. Flexport)
	 *
	 */
	readonly issuer?: CompanyEntity
	/**
	 * JSON-schema: array
	 */
	readonly items?: InvoiceItem[]
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
	readonly credit_memos?: CreditMemo[]
	/**
	 * Expandable link to shipment(s) related to this invoice.
	 *
	 */
	readonly shipments?: ApiObjectRef
}
export type LiftedInvoice = TypedApiObject &
	Omit<Invoice, 'issued_at' | 'voided_at' | 'last_updated_at' | 'shipments'> & {
		/**
		 * When the invoice was issued
		 */
		readonly issued_at?: Date
		/**
		 * When the invoice was voided (if applicable)
		 */
		readonly voided_at?: Date
		/**
		 * Time of the last adjustment to in invoice
		 */
		readonly last_updated_at?: Date
		/**
		 * Expandable link to shipment(s) related to this invoice.
		 */
		readonly shipments: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftInvoice = (original: Invoice): LiftedInvoice => {
	const { issued_at, voided_at, last_updated_at, shipments, ...rest } = original
	return {
		...rest,
		issued_at: issued_at ? new Date(issued_at) : undefined,
		voided_at: voided_at ? new Date(voided_at) : undefined,
		last_updated_at: last_updated_at ? new Date(last_updated_at) : undefined,
		shipments: linkObject(shipments),
	}
}
