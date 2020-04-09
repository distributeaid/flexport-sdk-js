import { Address, toAddress } from './Address'
import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { Either, isLeft, right } from 'fp-ts/lib/Either'

export const TERMINAL_TYPE = '/shipment_node/terminal'

export type Terminal = ApiObject & {
	/**
	 * String representing the object’s type. Always `/shipment_node/terminal` for this object.
	 */
	_object: typeof TERMINAL_TYPE

	/**
	 * Name of the terminal.
	 */
	name: string

	/**
	 * Address of the terminal.
	 */
	address: Address
}

export const toTerminal = (
	apiResponseObject: ApiObject,
): Either<ApiError, Terminal> => {
	const address = toAddress(apiResponseObject.address)
	if (isLeft(address)) return address

	return right({
		...apiResponseObject,
		address: address.right,
	} as Terminal)
}
