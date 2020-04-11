import { ApiObject } from './ApiObject'
import { passThrough } from '../transformer/transform'
import { Type } from './types'

export type Address = ApiObject & {
	/**
	 * String representing the object’s type. Always `/address` for this object.
	 */
	_object: Type.Address

	/**
	 * Address line 1 (Street address/PO Box).
	 */
	street_address: string

	/**
	 * Address line 2 (Apartment/Suite/Unit/Building).
	 */
	street_address2?: string

	/**
	 * City/Town.
	 */
	city: string

	/**
	 * State/County/Province/Region.
	 */
	state: string

	/**
	 * Country.
	 */
	country: string

	/**
	 * Two-letter country code (ISO 3166-1 Alpha-2).
	 */
	country_code: string

	/**
	 * ZIP or postal code.
	 */
	zip: string

	/**
	 * If port, then UN/LOCODE (United Nations Code for Trade and Transport Locations).
	 */
	unlocode?: string

	/**
	 * Timezone for this address
	 */
	timezone: string

	/**
	 * Your reference for the address, as set in your network tab
	 */
	ref: string
}

export const toAddress = (o: ApiObject) => passThrough<Address>(o as Address)
