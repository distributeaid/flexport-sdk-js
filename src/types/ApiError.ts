import { Type } from '../generated/Type'

/**
 * It may occur that we have issues in understanding or processing your request. Under these circumstances, the response will resolve with an error object (under the error attribute) providing insight on what went wrong
 *
 * @see https://apibeta.flexport.com/reference/errors
 */
export type ApiError = {
	/**
	 * String representing the object’s type. Always `/api/error` for this object.
	 */
	_object: Type.Error
	/**
	 * The HTTP status code (client or server error) made available for consumption from the body of the response
	 */
	status: number
	/**
	 * Specialized identifier for this type of error in our API
	 */
	code: string
	/**
	 * Human readable error message
	 */
	message: string
}
