import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'

export const RAILPORT_TYPE = '/ocean/railport'

export type Railport = ApiObject & {
	/**
	 * String representing the object’s type. Always `/ocean/railport` for this object.
	 */
	_object: typeof RAILPORT_TYPE

	/**
	 * Port code used by US Customs and Border Protection (US CBP).
	 */
	port_code: string
}

export const toRailport = (o: ApiObject) => passThrough<Railport>(o as Railport)
