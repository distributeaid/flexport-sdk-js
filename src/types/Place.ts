import { Address, toAddress } from './Address'
import { Airport, toAirport } from './Airport'
import { Seaport, toSeaport } from './Seaport'
import { Roadport, toRoadport } from './Roadport'
import { Railport, toRailport } from './Railport'
import { Either, right, isLeft, left, Left, Right } from 'fp-ts/lib/Either'
import { ApiError } from './ApiError'
import { ApiObject } from './ApiObject'
import { Type } from './types'

type PortDetail = Airport | Seaport | Roadport | Railport

export type Place = ApiObject & {
	/**
	 * String representing the object’s type. Always `/place` for this object.
	 */
	_object: Type.PLACE_TYPE

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
				case Type.AIRPORT_TYPE:
					return toAirport(o)
				case Type.SEAPORT_TYPE:
					return toSeaport(o)
				case Type.ROADPORT_TYPE:
					return toRoadport(o)
				case Type.RAILPORT_TYPE:
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
