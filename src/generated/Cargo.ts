import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { ShippingUnit } from './ShippingUnit'
/**
 * With cargo you have two options, detailed or simple. These are both expressed directly on the cargo object. For detailed cargo, `shipping_units` is required, and `weight` and `volume` is required in the `cargo` object or the `shipping_units` object. For simple cargo, `shipping_units` is required, but only one should be specified, and `weight` and `volume` are required in the `cargo` object.
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Cargo = {
	/**
	 * String representing the object’s type. Always `/cargo` for this object.
	 */
	readonly _object: Type.Cargo
	readonly volume?: Volume
	readonly weight?: Weight
	/**
	 * Optional. Identifying markings and numbers that are visible on the cargo.
	 *
	 * JSON-schema: string
	 * @example "Fragile"
	 */
	readonly marks_and_numbers?: string
	/**
	 * JSON-schema: array
	 */
	readonly shipping_units?: ShippingUnit[]
	/**
	 * Required. Whether the cargo contains hazardous materials.
	 *
	 * JSON-schema: boolean
	 */
	readonly contains_hazmat?: boolean
	/**
	 * Required. Whether the cargo contains magnets.
	 *
	 * JSON-schema: boolean
	 */
	readonly contains_magnets?: boolean
	/**
	 * Required. Whether the cargo contains other non-hazmat, non-magnet, non-battery dangerous goods.
	 *
	 * JSON-schema: boolean
	 */
	readonly contains_other_dangerous_goods?: boolean
	/**
	 * Required. Whether the cargo contains lithium-ion batteries.
	 *
	 * JSON-schema: boolean
	 */
	readonly contains_li_ion?: boolean
	/**
	 * Required. Whether the cargo contains non-lithium-ion batteries, e.g. lithium batteries.
	 *
	 * JSON-schema: boolean
	 */
	readonly contains_non_li_ion_battery?: boolean
	/**
	 * Required if `contains_li_ion` is `true`. List of ways in which lithium-ion batteries will be packed for this booking. This can be a subset of `packed_loose`, `packed_with_equipment`, `contained_in_equipment`, and `contained_in_battery_powered_vehicle`.
	 *
	 * JSON-schema: array
	 */
	readonly lithium_batteries_packing_types?: (
		| 'packed_loose'
		| 'packed_with_equipment'
		| 'contained_in_equipment'
		| 'contained_in_battery_powered_vehicles'
	)[]
}