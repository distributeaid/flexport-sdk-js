import {
	SHIPMENT_TYPE,
	toShipment,
	ApiObject,
	ApiResponseObject,
	API_RESPONSE_TYPE,
	ApiError,
	createError,
	PAGE_TYPE,
	toPage,
	Page,
	PageApiObject,
} from '../types'
import { Either, left, right } from 'fp-ts/lib/Either'

const transformers = {
	[SHIPMENT_TYPE]: toShipment,
} as {
	[key: string]: <O extends ApiObject>(
		apiResponseObject: O,
	) => Either<ApiError, unknown>
}

const passTransformer = <O extends ApiObject>(
	apiResponseObject: O,
): Either<never, O> => right(apiResponseObject)

const getTransformer = (_object: string) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passTransformer
}

export const transform = <A>(o: ApiObject): Either<ApiError, A> =>
	getTransformer(o._object)(o) as Either<ApiError, A>

const transformPage = <A extends ApiObject>(
	o: PageApiObject,
): Either<ApiError, Page<A>> => toPage<A>(o)

export const transformResponse = <A extends ApiObject>() => (
	response: ApiResponseObject,
): Either<ApiError, A> => {
	if (response._object !== API_RESPONSE_TYPE) {
		return left(createError(`Must pass an ${API_RESPONSE_TYPE}!`))
	}
	if (response.error) return left(response.error)
	try {
		return transform<A>(response.data)
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}

export const transformPaginatedResponse = <A extends ApiObject>() => (
	response: ApiResponseObject,
): Either<ApiError, Page<A>> => {
	if (response._object !== API_RESPONSE_TYPE) {
		return left(createError(`Must pass an ${API_RESPONSE_TYPE}!`))
	}
	if (response.data._object !== PAGE_TYPE) {
		return left(
			createError(`Must pass an ${API_RESPONSE_TYPE} with a ${PAGE_TYPE}!`),
		)
	}
	try {
		return transformPage<A>(response.data)
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}
