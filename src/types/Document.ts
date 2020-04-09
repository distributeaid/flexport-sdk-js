import { ApiObject } from './ApiObject'
import { Type } from './types'

export type Document = ApiObject & {
	/**
	 * String representing the object’s type. Always `/document` for this object.
	 */
	_object: Type.DOCUMENT_TYPE
}
