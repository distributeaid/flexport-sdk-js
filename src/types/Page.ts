import { ApiResponseObject } from './ApiResponseObject'
import { ApiObject } from './ApiObject'

export const PAGE_TYPE = '/api/collections/paginated'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type Page<A extends ApiResponseObject> = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/collections/paginated` for this object.
	 */
	_object: typeof PAGE_TYPE
	/**
	 * link to the previous page
	 */
	prev: string
	/**
	 * link to the next page
	 */
	next: string
	/**
	 * total number of elements for this query
	 */
	total_count: number
	/**
	 * list of elements in the current page
	 */
	data: A[]
}

export const toPage = <A extends ApiObject>(
	apiResponseObject: ApiObject,
): Page<A> =>
	({
		...apiResponseObject,
	} as Page<A>)
