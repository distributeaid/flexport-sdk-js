import { Type } from './Type'
import { Weight } from './Weight'
import { Volume } from './Volume'
import { Product } from './Product'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
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
