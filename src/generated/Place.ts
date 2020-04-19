import { Type } from './Type'
import { Address } from './Address'
import { Airport } from './Airport'
import { Railport } from './Railport'
import { Roadport } from './Roadport'
import { Seaport } from './Seaport'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Place = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Place
	/**
	 * Name of the place
	 *
	 * JSON-schema: string
	 * @example "ORD - Chicago - IL"
	 */
	readonly name: string
	readonly address: Address
	/**
	 * JSON-schema: array
	 */
	readonly details?: (Airport | Railport | Roadport | Seaport)[]
}
