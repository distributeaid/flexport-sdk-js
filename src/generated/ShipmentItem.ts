/**
 * Auto-generated file. Do not change.
 */
import { Product } from './Product'
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { TypedApiObject } from '../types/TypedApiObject'
export type ShipmentItem = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.ShipmentItem
	/**
	 * JSON-schema: integer
	 * @example 29820
	 */
	readonly id?: number
	/**
	 * JSON-schema: integer
	 * @example 523
	 */
	readonly total_units?: number
	readonly total_weight?: Weight
	readonly total_volume?: Volume
	/**
	 * JSON-schema: string
	 * @example "PO002811"
	 */
	readonly purchase_order_number?: string
	readonly product?: Product
}
export type LiftedShipmentItem = TypedApiObject & ShipmentItem
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentItem = (
	original: ShipmentItem,
): LiftedShipmentItem => {
	return original
}
