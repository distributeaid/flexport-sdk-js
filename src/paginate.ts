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
	paginator: TE.TaskEither<ApiError, Page<A>>,
	apiClient: Client,
	fetchedItems = [] as A[],
): TE.TaskEither<ApiError, A[]> =>
	pipe(
		paginator,
		TE.chain(({ next, items }) => {
			const allItems = [...fetchedItems, ...items]
			if (isSome(next))
				return paginate(
					apiClient.resolveCollectionRef<A>()(next.value),
					apiClient,
					allItems,
				)
			return TE.right(allItems)
		}),
	)
