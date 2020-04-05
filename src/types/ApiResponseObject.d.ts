import { ApiError } from './ApiError'

/**
 * All responses to authenticated API requests follow the same structure, wrapping resource data within an `/api/response` object of the following form
 *
 * @see https://apibeta.flexport.com/reference/response-layout
 */
export type ApiResponseObject = {
	/**
	 * String representing the object’s type. Always `/api/response` for this object.
	 */
	_object: '/api/response'
	/**
	 * The full path to the resource(s) requested
	 */
	self: string
	/**
	 * The version of the request.
	 *
	 * @see https://apibeta.flexport.com/reference-link/versioning
	 */
	version: 2
	/**
	 * The resource data requested for a successful response.
	 * null on error.
	 */
	data: object | null
	/**
	 * The error object indicating what went wrong.
	 *
	 * @see https://apibeta.flexport.com/reference-link/errors
	 */
	error: null | ApiError
}
