import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CommercialInvoiceCollectionRef = {
	readonly _object: Type.CollectionRef
	/**
	 * JSON-schema: string
	 * @example "/commercial_invoice"
	 */
	readonly ref_type: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/commercial_invoices?f.shipment.id=2983"
	 */
	readonly link: string
}
