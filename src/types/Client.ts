import * as TE from 'fp-ts/lib/TaskEither'
import { ErrorInfo } from './ErrorInfo'

export type ClientImplementationArgs = {
	path: string
	method: 'GET' | 'POST' | 'PATCH'
	params?: {
		path?: { [key: string]: any }
		query?: { [key: string]: any }
	}
}
export type ClientImplementation = <A>(
	args: ClientImplementationArgs,
) => TE.TaskEither<ErrorInfo, A>
