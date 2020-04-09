import {
	toShipment,
	ApiObject,
	ApiResponseObject,
	ApiError,
	createError,
	toPage,
	Page,
	PageApiObject,
	toShipmentLeg,
	Type,
} from '../types'
import { Either, left, right } from 'fp-ts/lib/Either'

const transformers = {
	[Type.SHIPMENT_TYPE]: toShipment,
	[Type.SHIPMENT_LEG_TYPE]: toShipmentLeg,
} as {
	[key: string]: <O extends ApiObject>(
		apiResponseObject: O,
	) => Either<ApiError, unknown>
}

export const passThrough = <O extends ApiObject>(
	apiResponseObject: O,
): Either<never, O> => right(apiResponseObject)

const getTransformer = (_object: string) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passThrough
}

export const transform = <A>(o: ApiObject): Either<ApiError, A> =>
	getTransformer(o._object)(o) as Either<ApiError, A>

const transformPage = <A extends ApiObject>(
	o: PageApiObject,
): Either<ApiError, Page<A>> => toPage<A>(o)

export const transformResponse = <A extends ApiObject>() => (
	response: ApiResponseObject,
): Either<ApiError, A> => {
	if (response._object !== Type.API_RESPONSE_TYPE) {
		return left(createError(`Must pass an ${Type.API_RESPONSE_TYPE}!`))
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
	if (response._object !== Type.API_RESPONSE_TYPE) {
		return left(createError(`Must pass an ${Type.API_RESPONSE_TYPE}!`))
	}
	if (response.data._object !== Type.PAGE_TYPE) {
		return left(
			createError(
				`Must pass an ${Type.API_RESPONSE_TYPE} with a ${Type.PAGE_TYPE}!`,
			),
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
