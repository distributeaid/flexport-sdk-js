import { AddressBase } from './AddressBase'
/**
 * Name and address of a specific terminal within a port or airport.  Possibly null
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type TerminalBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/shipment_node/terminal'
	/**
	 * Name of the terminal
	 *
	 * JSON-schema: string
	 * @example "Terminal 3"
	 */
	readonly name?: string
	readonly address?: AddressBase
}
