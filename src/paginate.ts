import * as TE from 'fp-ts/lib/TaskEither'
import { ApiError, ApiObject, Page } from './types'
import { Client } from './createClient'
import { isSome } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

/**
 * Iteratively follows paginated results.
 * NOTE: This method has no upper runtime limit and may time out.
 */
export const paginate = <A extends ApiObject>(
	apiClient: Client,
	fetchedItems = [] as A[],
) => ({ next, items }: Page<A>): TE.TaskEither<ApiError, A[]> => {
	const allItems = [...items, ...fetchedItems]
	if (isSome(next)) {
		return pipe(
			apiClient.resolveCollectionRef<A>()(next.value),
			TE.chain(paginate(apiClient, allItems)),
		)
	}
	return TE.right(allItems)
}
