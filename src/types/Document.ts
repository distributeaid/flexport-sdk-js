import { ApiObject } from './ApiObject'

export const DOCUMENT_TYPE = '/document'

export type Document = ApiObject & {
	/**
	 * String representing the object’s type. Always `/document` for this object.
	 */
	_object: typeof DOCUMENT_TYPE
}
