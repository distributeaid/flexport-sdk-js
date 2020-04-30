import { ApiObject, Page } from './types'
import { TypedApiObject } from './types/TypedApiObject'
import { ApiPageObject } from './types/ApiPageObject'
import { Type } from './generated'
import { linkPage } from './links'

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
