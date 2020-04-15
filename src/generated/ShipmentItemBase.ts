import { WeightBase } from './WeightBase'
import { VolumeBase } from './VolumeBase'
import { ProductBase } from './ProductBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentItemBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/shipment_item'
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
	readonly total_weight?: WeightBase
	readonly total_volume?: VolumeBase
	/**
	 * JSON-schema: string
	 * @example "PO002811"
	 */
	readonly purchase_order_number?: string
	readonly product?: ProductBase
}
