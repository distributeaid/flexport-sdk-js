/**
 * Auto-generated file. Do not change.
 */
export type UpdateContact = {
	/**
	 * Updated name of the contact.
	 *
	 * JSON-schema: string
	 * @example "John Smith"
	 */
	readonly name?: string
	/**
	 * Updated email address of the contact.
	 *
	 * JSON-schema: string
	 * @example "john_new_email@example.com"
	 */
	readonly email?: string
	/**
	 * Updated phone number of the contact.
	 *
	 * JSON-schema: string
	 * @example "861-555-7777"
	 */
	readonly phone_number?: string
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftUpdateContact = (original: UpdateContact) => {
	return original
}
