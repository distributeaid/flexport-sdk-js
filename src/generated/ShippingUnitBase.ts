import { VolumeBase } from './VolumeBase'
import { WeightBase } from './WeightBase'
import { LengthBase } from './LengthBase'
/**
 * For detailed cargo, `shipping_units` is required. For simple cargo, `shipping_units` is required, but only one should be specified.
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShippingUnitBase = {
	/**
	 * String representing the object’s type. Always `/shipping_unit` for this object.
	 */
	readonly _object: '/shipping_unit'
	/**
	 * Optional. Name of the unit of cargo.
	 *
	 * JSON-schema: string
	 * @example "Cellular phones"
	 */
	readonly name?: string
	readonly volume?: VolumeBase
	readonly weight?: WeightBase
	readonly height?: LengthBase
	readonly length?: LengthBase
	readonly width?: LengthBase
	/**
	 * Required. Total number of this shipping unit.
	 *
	 * JSON-schema: integer
	 * @example 9
	 */
	readonly count?: number
	/**
	 * Required if `unit_type` = `pallet`. The number of atomic units, i.e. units that will not be unpacked and broken up during shipping, contained in each shipping unit.
	 *
	 * JSON-schema: integer
	 * @example 9
	 */
	readonly atomic_count?: number
	/**
	 * Required. Packing method of the shipping. This can be `bag`, `bale`, `barrel`, `carton`, `crate`, `package`, `pallet`, or `roll`.
	 *
	 * JSON-schema: string
	 * @example "pallet"
	 */
	readonly unit_type?: string
}
