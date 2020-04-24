/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Location } from './Location'
import { Company } from './Company'
export type Contact = {
	/**
	 * Type of the object. Always /network/contact for this object.
	 */
	readonly _object: Type.Contact
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
	readonly locations?: Location[]
	readonly company?: Company
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftContact = (original: Contact) => {
	return original
}
