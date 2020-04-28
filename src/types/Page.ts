import { ApiObject } from './ApiObject'
import { linkPage, ResolvablePage } from './Link'
import { Option } from 'fp-ts/lib/Option'
import { Type } from '../generated/Type'
import { ApiPageObject } from './ApiPageObject'
import { TypedApiObject } from './TypedApiObject'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type Page<A extends ApiObject> = {
	/**
	 * String representing the object’s type. Always `/api/collections/paginated` for this object.
	 */
	_object: Type.Page
	/**
	 * link to the previous page
	 */
	prev: Option<ResolvablePage>
	/**
	 * link to the next page
	 */
	next: Option<ResolvablePage>
	/**
	 * total number of elements for this query
	 */
	total_count: number
	/**
	 * list of elements in the current page
	 */
	items: A[]
}

export const toPage = <A extends ApiObject, O extends TypedApiObject>(
	transform: (apiResponseObject: A) => O,
) => (pageResponse: ApiPageObject<A>): Page<O> => {
	const { data } = pageResponse
	const items = data?.map((item) => transform(item)) ?? []
	return {
		_object: Type.Page,
		total_count: pageResponse.total_count,
		next: linkPage<A>('next', pageResponse),
		prev: linkPage<A>('prev', pageResponse),
		items,
	}
}
