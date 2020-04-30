import * as TE from 'fp-ts/lib/TaskEither'
import { Page, ResolvablePage } from './types'
import { isSome } from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { ErrorInfo } from './types/ErrorInfo'
import { TypedApiObject } from './types/TypedApiObject'

/**
 * Iteratively follows paginated results.
 * NOTE: This method has no upper runtime limit and may time out.
 */
export const paginate = <O extends TypedApiObject>(
	resolvePage: (page: ResolvablePage) => TE.TaskEither<ErrorInfo, Page<O>>,
	fetchedItems = [] as O[],
) => ({ next, items }: Page<O>): TE.TaskEither<ErrorInfo, O[]> => {
	const allItems = [...items, ...fetchedItems]
	if (isSome(next)) {
		return pipe(
			resolvePage(next.value),
			TE.chain(paginate(resolvePage, allItems)),
		)
	}
	return TE.right(allItems)
}
