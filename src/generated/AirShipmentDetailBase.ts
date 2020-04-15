import { WeightBase } from './WeightBase'
import { VolumeBase } from './VolumeBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type AirShipmentDetailBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/air/shipment'
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
	readonly chargeable_weight?: WeightBase
	readonly chargeable_volume?: VolumeBase
}
