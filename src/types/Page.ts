import { ApiObject } from './ApiObject'
import { Either, right, isLeft, isRight } from 'fp-ts/lib/Either'
import { linkCollection, ResolvableCollection } from './Link'
import { transform } from '../transformer/transform'
import { Option, none } from 'fp-ts/lib/Option'
import { Type } from '../generated/Type'
import { ErrorInfo } from './ErrorInfo'
import { ApiPageObject } from './ApiPageObject'

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
	prev: Option<ResolvableCollection>
	/**
	 * link to the next page
	 */
	next: Option<ResolvableCollection>
	/**
	 * total number of elements for this query
	 */
	total_count: number
	/**
	 * list of elements in the current page
	 */
	items: A[]
}

export const toPage = <A extends ApiObject>(
	pageResponse: ApiPageObject<A>,
	itemType: Type,
): Either<ErrorInfo, Page<A>> => {
	const { data, next, prev } = pageResponse
	const transformedItems = data?.map((item) => transform<A>(item)) ?? []
	const itemError = transformedItems.find((item) => isLeft(item))
	if (itemError) return itemError as Either<ErrorInfo, never>
	const items = transformedItems.map((i) => isRight(i) && i.right) as A[]
	return right({
		_object: Type.Page,
		total_count: pageResponse.total_count,
		next:
			(next &&
				linkCollection({
					_object: Type.CollectionRef,
					link: next,
					ref_type: itemType as string,
				})) ||
			none,
		prev:
			(prev &&
				linkCollection({
					_object: Type.CollectionRef,
					link: prev,
					ref_type: itemType as string,
				})) ||
			none,
		items,
	})
}
