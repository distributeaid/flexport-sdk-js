import { ApiObject, ApiResponseObject, toPage, Page } from '../types'
import { Either, left, right } from 'fp-ts/lib/Either'
import { nullToUndefined } from './nullToUndefined'
import { ErrorInfo, createError } from '../types/ErrorInfo'
import { Type, liftShipment, liftShipmentLeg } from '../generated'
import { ApiPageObject } from '../types/ApiPageObject'
import { TypedApiObject } from '../types/TypedApiObject'

const transformers = {
	[Type.Shipment]: liftShipment,
	[Type.ShipmentLeg]: liftShipmentLeg,
} as {
	[key: string]: <I extends ApiObject, O extends TypedApiObject>(
		apiResponseObject: I,
	) => O
}

export const passThrough = <O extends ApiObject>(
	apiResponseObject: O,
): TypedApiObject => nullToUndefined(apiResponseObject)

const getTransformer = (_object: string) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passThrough
}

export const transform = <A>(o: ApiObject): A =>
	(getTransformer(o._object)(nullToUndefined(o)) as unknown) as A

const transformPage = <A extends ApiObject, O extends TypedApiObject>(
	o: ApiPageObject<A>,
	transform: (apiResponseObject: A) => O,
): Page<O> => toPage<A, O>(transform)(nullToUndefined(o))

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
		return right(transform<A>(response.data))
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}

export const transformPaginatedResponse = <
	A extends ApiObject,
	O extends TypedApiObject
>(
	transform: (apiResponseObject: A) => O,
) => (
	response: ApiResponseObject<ApiPageObject<A>>,
): Either<ErrorInfo, Page<O>> => {
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
		return right(transformPage<A, O>(response.data, transform))
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}
