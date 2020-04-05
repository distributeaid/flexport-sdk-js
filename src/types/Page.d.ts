import { ApiResponseObject } from './ApiResponseObject'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type Page<A extends ApiResponseObject> = ApiResponseObject & {
	/**
	 * String representing the object’s type. Always `/api/collections/paginated` for this object.
	 */
	_object: '/api/collections/paginated'
	/**
	 * link to the previous page
	 */
	prev: string
	/**
	 * link to the next page
	 */
	next: string
	/**
	 * list of elements in the current page
	 */
	data: A[]
}
