/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { TypedApiObject } from '../types/TypedApiObject'
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
export type LiftedAirShipmentDetail = TypedApiObject & AirShipmentDetail
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAirShipmentDetail = (
	original: AirShipmentDetail,
): LiftedAirShipmentDetail => {
	return original
}
