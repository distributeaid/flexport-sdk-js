import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'

export const ROADPORT_TYPE = '/trucking/port'

export type Roadport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/trucking/port` for this object.
	 */
	_object: typeof ROADPORT_TYPE

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string
}

export const toRoadport = (o: ApiObject) => passThrough<Roadport>(o as Roadport)
