import { ApiError } from './ApiError'
import { ApiObject } from './ApiObject'
import { Type } from './types'

/**
 * All responses to authenticated API requests follow the same structure, wrapping resource data within an `/api/response` object of the following form
 *
 * @see https://apibeta.flexport.com/reference/response-layout
 */
export type ApiResponseObject = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/response` for this object.
	 */
	_object: Type.ApiResponse
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
