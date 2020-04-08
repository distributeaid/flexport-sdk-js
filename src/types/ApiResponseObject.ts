import { ApiError } from './ApiError'
import { ApiObject } from './ApiObject'

export const API_RESPONSE_TYPE = '/api/response'

/**
 * All responses to authenticated API requests follow the same structure, wrapping resource data within an `/api/response` object of the following form
 *
 * @see https://apibeta.flexport.com/reference/response-layout
 */
export type ApiResponseObject = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/response` for this object.
	 */
	_object: typeof API_RESPONSE_TYPE
	/**
	 * The error object indicating what went wrong.
	 *
	 * @see https://apibeta.flexport.com/reference-link/errors
	 */
	error: null | ApiError
	/**
	 * The resource data requested for a successful response.
	 * null on error.
	 */
	data: any | null
}
