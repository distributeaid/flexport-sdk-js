import { Type } from '../generated'
import { ApiObject } from './ApiObject'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type ApiPageObject<A> = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/collections/paginated` for this object.
	 */
	_object: Type.Page
	/**
	 * link to the previous page
	 */
	prev?: string
	/**
	 * link to the next page
	 */
	next?: string
	/**
	 * The resource data requested for a successful response.
	 * Undefined on error.
	 */
	data?: A[]
}
