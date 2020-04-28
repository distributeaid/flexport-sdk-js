import * as TE from 'fp-ts/lib/TaskEither'
import { Page, ApiObject } from './types'
import { Client } from './createClient'
import { isSome } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { ErrorInfo } from './types/ErrorInfo'
import { TypedApiObject } from './types/TypedApiObject'

/**
 * Iteratively follows paginated results.
 * NOTE: This method has no upper runtime limit and may time out.
 */
export const paginate = <A extends ApiObject, O extends TypedApiObject>(
	apiClient: Client,
	transform: (apiResponseObject: A) => O,
	fetchedItems = [] as O[],
) => ({ next, items }: Page<O>): TE.TaskEither<ErrorInfo, O[]> => {
	const allItems = [...items, ...fetchedItems]
	if (isSome(next)) {
		return pipe(
			apiClient.resolvePageRef<A, O>(transform)(next.value),
			TE.chain(paginate(apiClient, transform, allItems)),
		)
	}
	return TE.right(allItems)
}
