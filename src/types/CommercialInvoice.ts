import { ApiObject } from './ApiObject'
import { Type } from './types'

export type CommercialInvoice = ApiObject & {
	/**
	 * String representing the object’s type. Always `/commercial_invoice` for this object.
	 */
	_object: Type.CommercialInvoice
}
