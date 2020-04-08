import { ApiObject } from './ApiObject'
import { Either, right, isLeft, isRight } from 'fp-ts/lib/Either'
import { ApiError } from './ApiError'
import { transform } from '../transformer/transform'

export const PAGE_TYPE = '/api/collections/paginated'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type Page<A extends ApiObject> = ApiObject & {
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

export type PageApiObject = ApiObject & { data: ApiObject[] | null }

export const toPage = <A extends ApiObject>(
	pageResponse: PageApiObject,
): Either<ApiError, Page<A>> => {
	const items = pageResponse.data?.map(item => transform<A>(item)) ?? []
	const itemError = items.find(item => isLeft(item))
	if (itemError) return itemError as Either<ApiError, never>
	return right({
		...(pageResponse as Page<A>),
		data: items.map(i => isRight(i) && i.right) as A[],
	})
}
