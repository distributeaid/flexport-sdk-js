import { ApiError } from './ApiError'
import { ApiObject } from './ApiObject'
import { Type } from '../generated'

/**
 * All responses to authenticated API requests follow the same structure, wrapping resource data within an `/api/response` object of the following form
 *
 * @see https://apibeta.flexport.com/reference/response-layout
 */
export type ApiResponseObject<A> = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/response` for this object.
	 */
	_object: Type.Response
	/**
	 * The version of the request.
	 *
	 * @see https://apibeta.flexport.com/reference-link/versioning
	 */
	version: 2
	/**
	 * The full path to the resource(s) requested
	 */
	self: string
	/**
	 * The error object indicating what went wrong.
	 *
	 * @see https://apibeta.flexport.com/reference-link/errors
	 */
	error?: ApiError
	/**
	 * The resource data requested for a successful response.
	 * Undefined on error.
	 */
	data?: A
}
