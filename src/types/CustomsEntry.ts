import { ApiResponseObject } from './ApiResponseObject'

export const CUSTOMS_ENTRY_TYPE = '/customs_entry'

export type CustomsEntry = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/customs_entry` for this object.
	 */
	_object: typeof CUSTOMS_ENTRY_TYPE
}
