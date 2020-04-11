import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'
import { Type } from './types'

export type Airport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/air/port` for this object.
	 */
	_object: Type.Airport

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string

	/**
	 * International Air Transport Association (IATA) code for this place.
	 */
	iata_code: string

	/**
	 * International Civil Aviation Organization (ICAO) code for this place.
	 */
	icao_code: string
}

export const toAirport = (o: ApiObject) => passThrough<Airport>(o as Airport)
