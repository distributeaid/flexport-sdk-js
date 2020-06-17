/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { ApiCollectionRef } from '../types/ApiCollectionRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableCollection } from '../types/Link'
import { linkCollection } from '../links'
export type OceanShipmentDetail = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.OceanShipmentDetail
	/**
	 * JSON-schema: boolean
	 * @example false
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
	readonly containers?: ApiCollectionRef
}
export type LiftedOceanShipmentDetail = TypedApiObject &
	Omit<OceanShipmentDetail, 'containers'> & {
		readonly containers: Option<ResolvableCollection>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanShipmentDetail = (
	original: OceanShipmentDetail,
): LiftedOceanShipmentDetail => {
	const { containers, ...rest } = original
	return {
		...rest,
		containers: linkCollection(containers),
	}
}
