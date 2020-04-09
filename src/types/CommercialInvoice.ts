import { ApiObject } from './ApiObject'

export const COMMERCIAL_INVOICE_TYPE = '/commercial_invoice'

export type CommercialInvoice = ApiObject & {
	/**
	 * String representing the object’s type. Always `/commercial_invoice` for this object.
	 */
	_object: typeof COMMERCIAL_INVOICE_TYPE
}
