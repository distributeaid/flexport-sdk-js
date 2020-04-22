import { ApiObject, ApiResponseObject, toPage, Page } from '../types'
import { Either, left, right } from 'fp-ts/lib/Either'
import { nullToUndefined } from './nullToUndefined'
import { liftShipment } from '../lifters/Shipment'
import { liftShipmentLeg } from '../lifters/ShipmentLeg'
import { ErrorInfo, createError } from '../types/ErrorInfo'
import { Type } from '../generated'
import { ApiPageObject } from '../types/ApiPageObject'

const transformers = {
	[Type.Shipment]: liftShipment,
	[Type.ShipmentLeg]: liftShipmentLeg,
} as {
	[key: string]: <O extends ApiObject>(
		apiResponseObject: O,
	) => Either<ErrorInfo, unknown>
}

export const passThrough = <O extends ApiObject>(
	apiResponseObject: O,
): Either<never, O> => right(nullToUndefined(apiResponseObject))

const getTransformer = (_object: string) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passThrough
}

export const transform = <A>(o: ApiObject): Either<ErrorInfo, A> =>
	getTransformer(o._object)(nullToUndefined(o)) as Either<ErrorInfo, A>

const transformPage = <A extends ApiObject>(
	o: ApiPageObject<A>,
	type: Type,
): Either<ErrorInfo, Page<A>> => toPage<A>(nullToUndefined(o), type)

export const transformResponse = <A extends ApiObject>() => (
	response: ApiResponseObject<A>,
): Either<ErrorInfo, A> => {
	if (response._object !== Type.Response) {
		return left(createError(`Must pass an ${Type.Response}!`))
	}
	if (response.error)
		return left(
			createError(`${response.error.message} (${response.error.code})`),
		)
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
) => (
	response: ApiResponseObject<ApiPageObject<A>>,
): Either<ErrorInfo, Page<A>> => {
	if (response._object !== Type.Response) {
		return left(createError(`Must pass an ${Type.Response}!`))
	}
	if (response.error)
		return left(
			createError(`${response.error.message} (${response.error.code})`),
		)
	if (response.data._object !== Type.Page) {
		return left(
			createError(`Must pass an ${Type.Response} with a ${Type.Page}!`),
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
