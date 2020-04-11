import { ApiObject } from './ApiObject'
import { Type } from './types'

export type CustomsEntry = ApiObject & {
	/**
	 * String representing the object’s type. Always `/customs_entry` for this object.
	 */
	_object: Type.CustomsEntry
}
