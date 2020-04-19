/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type AdditionalDates = {
	/**
	 * Represents the date when the cargo on the leg is ready for pickup.
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
	/**
	 * Date at which the appointment was first requested
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivery_appointment_requested_at_date?: string
	/**
	 * Date of the actual appointment date that was requested in that initial request
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivery_appointment_requested_date?: string
	/**
	 * Date at which the appointment was confirmed by the DC
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivery_appointment_scheduled_at_date?: string
	/**
	 * Date of the actual confirmed appointment
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivery_appointment_scheduled_date?: string
	/**
	 * Date when the cargo has been transloaded from an ocean container to a truck
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly loaded_on_truck_date?: string
	/**
	 * Date when the cargo for this leg was unloaded and fully received at the final destination
	 *
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly delivery_completed?: string
}
