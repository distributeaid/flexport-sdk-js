import { ShipmentEventDataBase } from './ShipmentEventDataBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type WebhookEventBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/event'
	/**
	 * JSON-schema: integer
	 * @example 354987
	 */
	readonly id?: number
	/**
	 * JSON-schema: integer
	 * @example 2
	 */
	readonly version?: number
	/**
	 * JSON-schema: string
	 * @example "2019-04-16T18:05:10.964Z"
	 */
	readonly created_at?: string
	/**
	 * JSON-schema: string
	 * @example "2019-04-16T18:05:10.964Z"
	 */
	readonly occurred_at?: string
	/**
	 * JSON-schema: string
	 * @example "/shipment_leg#departed"
	 */
	readonly type?: string
	readonly data?: ShipmentEventDataBase
}
