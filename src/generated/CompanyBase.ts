import { MetadataBase } from './MetadataBase'
import { CompanyEntityBase } from './CompanyEntityBase'
import { LocationBase } from './LocationBase'
import { ContactBase } from './ContactBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CompanyBase = {
	/**
	 * Type of the object. Always /network/company for this object.
	 */
	readonly _object: '/network/company'
	/**
	 * Unique identifier for the company
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	readonly metadata?: MetadataBase
	/**
	 * JSON-schema: string
	 */
	readonly name?: string
	/**
	 * JSON-schema: string
	 */
	readonly ref?: string
	/**
	 * JSON-schema: boolean
	 */
	readonly editable?: boolean
	/**
	 * JSON-schema: array
	 */
	readonly entities?: CompanyEntityBase[]
	/**
	 * JSON-schema: array
	 */
	readonly locations?: LocationBase[]
	/**
	 * JSON-schema: array
	 */
	readonly contacts?: ContactBase[]
}
