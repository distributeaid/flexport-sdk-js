/**
 * Auto-generated file. Do not change.
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
export type LiftedAdditionalDates = Omit<
	AdditionalDates,
	| 'delivery_appointment_requested_at_date'
	| 'delivery_appointment_requested_date'
	| 'delivery_appointment_scheduled_at_date'
	| 'delivery_appointment_scheduled_date'
	| 'loaded_on_truck_date'
	| 'delivery_completed'
> & {
	/**
	 * Date at which the appointment was first requested
	 */
	readonly delivery_appointment_requested_at_date?: Date
	/**
	 * Date of the actual appointment date that was requested in that initial request
	 */
	readonly delivery_appointment_requested_date?: Date
	/**
	 * Date at which the appointment was confirmed by the DC
	 */
	readonly delivery_appointment_scheduled_at_date?: Date
	/**
	 * Date of the actual confirmed appointment
	 */
	readonly delivery_appointment_scheduled_date?: Date
	/**
	 * Date when the cargo has been transloaded from an ocean container to a truck
	 */
	readonly loaded_on_truck_date?: Date
	/**
	 * Date when the cargo for this leg was unloaded and fully received at the final destination
	 */
	readonly delivery_completed?: Date
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAdditionalDates = (
	original: AdditionalDates,
): LiftedAdditionalDates => {
	const {
		delivery_appointment_requested_at_date,
		delivery_appointment_requested_date,
		delivery_appointment_scheduled_at_date,
		delivery_appointment_scheduled_date,
		loaded_on_truck_date,
		delivery_completed,
		...rest
	} = original
	return {
		...rest,
		delivery_appointment_requested_at_date:
			delivery_appointment_requested_at_date !== undefined
				? new Date(delivery_appointment_requested_at_date)
				: undefined,
		delivery_appointment_requested_date:
			delivery_appointment_requested_date !== undefined
				? new Date(delivery_appointment_requested_date)
				: undefined,
		delivery_appointment_scheduled_at_date:
			delivery_appointment_scheduled_at_date !== undefined
				? new Date(delivery_appointment_scheduled_at_date)
				: undefined,
		delivery_appointment_scheduled_date:
			delivery_appointment_scheduled_date !== undefined
				? new Date(delivery_appointment_scheduled_date)
				: undefined,
		loaded_on_truck_date:
			loaded_on_truck_date !== undefined
				? new Date(loaded_on_truck_date)
				: undefined,
		delivery_completed:
			delivery_completed !== undefined
				? new Date(delivery_completed)
				: undefined,
	}
}
