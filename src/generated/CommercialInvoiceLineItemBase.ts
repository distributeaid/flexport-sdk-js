import { MoneyBase } from './MoneyBase'
import { WeightBase } from './WeightBase'
import { VolumeBase } from './VolumeBase'
import { ProductRefBase } from './ProductRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CommercialInvoiceLineItemBase = {
	/**
	 * Type of the object. Always /commercial_invoice_line_item for this object.
	 */
	readonly _object: '/commercial_invoice_line_item'
	readonly price_per_unit?: MoneyBase
	readonly value?: MoneyBase
	/**
	 * JSON-schema: integer
	 * @example 10
	 */
	readonly total_units?: number
	/**
	 * JSON-schema: string
	 * @example "XYZ123"
	 */
	readonly container_number?: string
	/**
	 * JSON-schema: string
	 * @example "9876-ABC"
	 */
	readonly purchase_order_number?: string
	readonly weight?: WeightBase
	readonly volume?: VolumeBase
	readonly product?: ProductRefBase
}
