/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { Length } from './Length'
/**
 * For detailed cargo, `shipping_units` is required. For simple cargo, `shipping_units` is required, but only one should be specified.
 */
export type ShippingUnit = {
	/**
	 * String representing the object’s type. Always `/shipping_unit` for this object.
	 */
	readonly _object: Type.ShippingUnit
	/**
	 * Optional. Name of the unit of cargo.
	 *
	 * JSON-schema: string
	 * @example "Cellular phones"
	 */
	readonly name?: string
	readonly volume?: Volume
	readonly weight?: Weight
	readonly height?: Length
	readonly length?: Length
	readonly width?: Length
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
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShippingUnit = (original: ShippingUnit) => {
	return original
}
