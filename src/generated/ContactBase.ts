import { LocationBase } from './LocationBase'
import { CompanyBase } from './CompanyBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ContactBase = {
	/**
	 * Type of the object. Always /network/contact for this object.
	 */
	readonly _object: '/network/contact'
	/**
	 * Unique identifier for the contact
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	/**
	 * JSON-schema: string
	 */
	readonly name?: string
	/**
	 * JSON-schema: string
	 */
	readonly email?: string
	/**
	 * JSON-schema: string
	 */
	readonly phone_number?: string
	/**
	 * JSON-schema: array
	 */
	readonly locations?: LocationBase[]
	readonly company?: CompanyBase
}
