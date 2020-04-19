import { Type } from './Type'
import { Weight } from './Weight'
import { Volume } from './Volume'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type AirShipmentDetail = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.AirShipmentDetail
	/**
	 * JSON-schema: string
	 * @example "HWXJKE67732"
	 */
	readonly house_airway_bill?: string
	/**
	 * JSON-schema: string
	 * @example "22831046871"
	 */
	readonly master_airway_bill?: string
	readonly chargeable_weight?: Weight
	readonly chargeable_volume?: Volume
}
