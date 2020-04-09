import { Address, toAddress } from './Address'
import { Airport, AIRPORT_TYPE, toAirport } from './Airport'
import { Seaport, SEAPORT_TYPE, toSeaport } from './Seaport'
import { Roadport, ROADPORT_TYPE, toRoadport } from './Roadport'
import { Railport, RAILPORT_TYPE, toRailport } from './Railport'
import { Either, right, isLeft, left, Left, Right } from 'fp-ts/lib/Either'
import { ApiError } from './ApiError'
import { ApiObject } from './ApiObject'

export const PLACE_TYPE = '/place'

type PortDetail = Airport | Seaport | Roadport | Railport

export type Place = ApiObject & {
	/**
	 * String representing the object’s type. Always `/place` for this object.
	 */
	_object: typeof PLACE_TYPE

	/**
	 * Name for this place.
	 */
	name: string

	/**
	 *Address for this place.
	 */
	address: Address

	/**
	 * If port, then additional details about the port. This array has one element for each type of the following ports: Seaport, Airport, Railport, Roadport
	 */
	details: PortDetail[]
}

export const toPlace = (
	apiResponseObject: ApiObject,
): Either<ApiError, Place> => {
	const address = toAddress(apiResponseObject.address)
	if (isLeft(address)) return address

	const details: Either<ApiError, PortDetail>[] = apiResponseObject.details.map(
		(o: ApiObject) => {
			switch (o._object) {
				case AIRPORT_TYPE:
					return toAirport(o)
				case SEAPORT_TYPE:
					return toSeaport(o)
				case ROADPORT_TYPE:
					return toRoadport(o)
				case RAILPORT_TYPE:
					return toRailport(o)
				default:
					return left(`Unknown Place detail: ${o._object}!`)
			}
		},
	)

	const detailError = details.find(d => isLeft(d))
	if (detailError) return detailError as Left<ApiError>

	return right({
		...apiResponseObject,
		address: address.right,
		details: details.map(d => (d as Right<PortDetail>).right),
	} as Place)
}
