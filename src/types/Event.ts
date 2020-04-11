import { ApiObject } from './ApiObject'
import { Type } from './types'
import { Milestone } from './Milestone'
import { ShipmentEvent } from './ShipmentEvent'

/**
 * An event is a recording of an action that occurred on another API core
 * resource and was delivered to a configured webhook. If an action occurs and
 * no webhooks are setup, the event will not be recorded. The same data that is
 * delivered to a webhook can be later fetched via the `/events` endpoint.
 *
 * @see https://apibeta.flexport.com/reference/event
 */
export type Event = ApiObject & {
	/**
	 * String representing the object’s type. Always `/event` for this object.
	 */
	_object: Type.Event

	/**
	 * Unique identifier for the object.
	 */
	id: number

	/**
	 * Description classifying this event. Concatenation of a noun (API resource acted on) and a verb (the action that occurred).
	 */
	type: Milestone

	/**
	 * When the event was created
	 */
	created_at?: string

	/**
	 * When the event occurred
	 */
	occurred_at: string

	/**
	 * Payload that contains data associated with this event type
	 *
	 * TODO: Implement InvoiceEvent
	 */
	data: ShipmentEvent
}
