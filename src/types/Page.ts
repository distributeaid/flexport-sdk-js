import { ApiObject } from './ApiObject'
import { Either, right, isLeft, isRight } from 'fp-ts/lib/Either'
import { ApiError } from './ApiError'
import { ResolvableObject } from './Link'
import { transform } from '../transformer/transform'
import { Option } from 'fp-ts/lib/Option'
import { Type } from './types'

/**
 * All list endpoints return paginated responses. The response object contains elements of the current page, and links to the previous and next pages.
 *
 * @see https://apibeta.flexport.com/reference/pagination
 */
export type Page<A extends ApiObject> = ApiObject & {
	/**
	 * String representing the object’s type. Always `/api/collections/paginated` for this object.
	 */
	_object: Type.PAGE_TYPE
	/**
	 * link to the previous page
	 */
	prev: Option<ResolvableObject>
	/**
	 * link to the next page
	 */
	next: Option<ResolvableObject>
	/**
	 * total number of elements for this query
	 */
	total_count: number
	/**
	 * list of elements in the current page
	 */
	items: A[]
}

export type PageApiObject = ApiObject & { data: ApiObject[] | null }

export const toPage = <A extends ApiObject>(
	pageResponse: PageApiObject,
): Either<ApiError, Page<A>> => {
	const { data, ...rest } = pageResponse
	const transformedItems = data?.map(item => transform<A>(item)) ?? []
	const itemError = transformedItems.find(item => isLeft(item))
	if (itemError) return itemError as Either<ApiError, never>
	const items = transformedItems.map(i => isRight(i) && i.right) as A[]
	return right({
		...(rest as Page<A>),
		items,
	})
}
