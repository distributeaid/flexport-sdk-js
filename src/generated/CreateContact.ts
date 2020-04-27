/**
 * Auto-generated file. Do not change.
 */
export type CreateContact = {
	/**
	 * Always required. Name of the new contact.
	 *
	 * JSON-schema: string
	 * @example "John Smith"
	 */
	readonly name: string
	/**
	 * Always required. Email address of the new contact.
	 *
	 * JSON-schema: string
	 * @example "john@example.com"
	 */
	readonly email: string
	/**
	 * Always required. Phone number of the new contact.
	 *
	 * JSON-schema: string
	 * @example "861-555-5555"
	 */
	readonly phone_number: string
	/**
	 * ID of the new contact's company. If not specified, the contact will be created for your company.
	 *
	 * JSON-schema: string
	 * @example "2UXaj4xcHoW8nwh9UVOMpw"
	 */
	readonly company_id?: string
}
export type LiftedCreateContact = CreateContact
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateContact = (
	original: CreateContact,
): LiftedCreateContact => {
	return original
}
