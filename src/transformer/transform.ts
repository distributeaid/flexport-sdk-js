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
import { nullToUndefined } from './nullToUndefined'

const transformers = {
	[Type.Shipment]: toShipment,
	[Type.ShipmentLeg]: toShipmentLeg,
} as {
	[key: string]: <O extends ApiObject>(
		apiResponseObject: O,
	) => Either<ApiError, unknown>
}

export const passThrough = <O extends ApiObject>(
	apiResponseObject: O,
): Either<never, O> => right(nullToUndefined(apiResponseObject))

const getTransformer = (_object: string) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passThrough
}

export const transform = <A>(o: ApiObject): Either<ApiError, A> =>
	getTransformer(o._object)(nullToUndefined(o)) as Either<ApiError, A>

const transformPage = <A extends ApiObject>(
	o: PageApiObject,
	type: Type,
): Either<ApiError, Page<A>> => toPage<A>(nullToUndefined(o), type)

export const transformResponse = <A extends ApiObject>() => (
	response: ApiResponseObject,
): Either<ApiError, A> => {
	if (response._object !== Type.ApiResponse) {
		return left(createError(`Must pass an ${Type.ApiResponse}!`))
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

export const transformPaginatedResponse = <A extends ApiObject>(
	refType: Type,
) => (response: ApiResponseObject): Either<ApiError, Page<A>> => {
	if (response._object !== Type.ApiResponse) {
		return left(createError(`Must pass an ${Type.ApiResponse}!`))
	}
	if (response.data._object !== Type.Page) {
		return left(
			createError(`Must pass an ${Type.ApiResponse} with a ${Type.Page}!`),
		)
	}
	try {
		return transformPage<A>(response.data, refType)
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}
