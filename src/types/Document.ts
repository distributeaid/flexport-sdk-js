import { ApiResponseObject } from './ApiResponseObject'

export const DOCUMENT_TYPE = '/document'

export type Document = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/document` for this object.
	 */
	_object: typeof DOCUMENT_TYPE
}
