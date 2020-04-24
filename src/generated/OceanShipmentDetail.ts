/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ContainerCollectionRef } from './ContainerCollectionRef'
export type OceanShipmentDetail = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.OceanShipmentDetail
	/**
	 * JSON-schema: boolean
	 */
	readonly is_lcl?: boolean
	/**
	 * JSON-schema: string
	 * @example "TUWSANR18658"
	 */
	readonly house_bill_number?: string
	/**
	 * JSON-schema: string
	 * @example "NEWO697216024"
	 */
	readonly master_bill_number?: string
	/**
	 * JSON-schema: string
	 * @example "697216024"
	 */
	readonly carrier_booking_number?: string
	readonly containers?: ContainerCollectionRef
}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentDetail = (original: OceanShipmentDetail) => {
	return original
}
