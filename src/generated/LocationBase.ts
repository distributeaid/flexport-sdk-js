import { MetadataBase } from './MetadataBase'
import { AddressBase } from './AddressBase'
import { CompanyBase } from './CompanyBase'
import { ContactBase } from './ContactBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type LocationBase = {
	/**
	 * Type of the object. Always /network/location for this object.
	 */
	readonly _object: '/network/location'
	/**
	 * Unique identifier for the location
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	readonly metadata?: MetadataBase
	/**
	 * JSON-schema: string
	 */
	readonly name?: string
	readonly address?: AddressBase
	/**
	 * JSON-schema: boolean
	 */
	readonly editable?: boolean
	readonly company?: CompanyBase
	readonly contacts?: ContactBase
	/**
	 * JSON-schema: string
	 */
	readonly ref?: string
}
