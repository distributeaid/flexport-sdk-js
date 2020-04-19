import { Type } from './Type'
import { Metadata } from './Metadata'
import { Address } from './Address'
import { Company } from './Company'
import { Contact } from './Contact'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Location = {
	/**
	 * Type of the object. Always /network/location for this object.
	 */
	readonly _object: Type.Location
	/**
	 * Unique identifier for the location
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	readonly metadata?: Metadata
	/**
	 * JSON-schema: string
	 */
	readonly name?: string
	readonly address?: Address
	/**
	 * JSON-schema: boolean
	 */
	readonly editable?: boolean
	readonly company?: Company
	readonly contacts?: Contact
	/**
	 * JSON-schema: string
	 */
	readonly ref?: string
}
