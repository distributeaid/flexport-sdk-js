import { Type } from './Type'
import { Address } from './Address'
/**
 * Name and address of a specific terminal within a port or airport.  Possibly null
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Terminal = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.Terminal
	/**
	 * Name of the terminal
	 *
	 * JSON-schema: string
	 * @example "Terminal 3"
	 */
	readonly name?: string
	readonly address?: Address
}
