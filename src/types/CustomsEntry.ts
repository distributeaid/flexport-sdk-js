import { ApiObject } from './ApiObject'

export const CUSTOMS_ENTRY_TYPE = '/customs_entry'

export type CustomsEntry = ApiObject & {
	/**
	 * String representing the object’s type. Always `/customs_entry` for this object.
	 */
	_object: typeof CUSTOMS_ENTRY_TYPE
}
