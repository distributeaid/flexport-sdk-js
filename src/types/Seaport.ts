import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'

export const SEAPORT_TYPE = '/ocean/port'

export type Seaport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/ocean/port` for this object.
	 */
	_object: typeof SEAPORT_TYPE

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string
}

export const toSeaport = (o: ApiObject) => passThrough<Seaport>(o as Seaport)
