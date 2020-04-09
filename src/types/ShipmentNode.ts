import { Place, toPlace } from './Place'
import { Terminal, toTerminal } from './Terminal'
import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { right, Either, isLeft } from 'fp-ts/lib/Either'

export const SHIPMENT_NODE_TYPE = '/shipment_node'

export type ShipmentNode = ApiObject & {
	/**
	 * String representing the object’s type. Always `/shipment_node` for this object.
	 */
	_object: typeof SHIPMENT_NODE_TYPE

	/**
	 * Identifier(s) associated with node. For example, `origin_address`, `destination_address`, `port_of_loading`, `port_of_unloading`, `port_of_calling`, `fmc_port_of_unloading`, `customs_entry`,`transshipment`, or `place_of_delivery`.
	 */
	tags: string[]

	/**
	 * Place associated with this node.
	 */
	place: Place

	/**
	 * Information about the specific terminal for this node.
	 */
	terminal?: Terminal
}

export const toShipmentNode = (
	apiResponseObject: ApiObject,
): Either<ApiError, ShipmentNode> => {
	const place = toPlace(apiResponseObject.place)

	if (isLeft(place)) return place

	let terminal
	if (apiResponseObject.terminal) {
		terminal = toTerminal(apiResponseObject.terminal)
		if (isLeft(terminal)) return terminal
	}

	return right({
		...apiResponseObject,
		place: place.right,
		terminal: terminal?.right,
	} as ShipmentNode)
}
