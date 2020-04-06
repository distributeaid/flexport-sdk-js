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
} from '../types'
import { Either, left, right } from 'fp-ts/lib/Either'

const transformers = {
	[PAGE_TYPE]: toPage,
	[SHIPMENT_TYPE]: toShipment,
} as { [key: string]: <O extends ApiObject>(apiResponseObject: O) => unknown }

const passTransformer = <O extends ApiObject>(apiResponseObject: O) =>
	apiResponseObject

const getTransformer = <O extends ApiObject>({ _object }: O) => {
	if (transformers[_object]) return transformers[_object]
	console.debug(`Using pass transformer for ${_object}.`)
	return passTransformer
}

const transform = <A>(o: ApiObject): A => {
	const t = getTransformer(o)
	return t(o) as A
}

export const transformResponse = <A extends ApiObject>(
	response: ApiResponseObject,
): Either<ApiError, A> => {
	if (response._object !== API_RESPONSE_TYPE) {
		return left(createError(`Must pass an ${API_RESPONSE_TYPE}!`))
	}
	if (response.error) return left(response.error)
	try {
		const o = transform<A>(response.data as ApiObject)
		return right(o as A)
	} catch (error) {
		console.error(error)
		console.debug(response)
		return left(createError(`Failed to parse ApiResponse`))
	}
}
