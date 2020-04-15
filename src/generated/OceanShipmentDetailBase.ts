import { ContainerCollectionRefBase } from './ContainerCollectionRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type OceanShipmentDetailBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/ocean/shipment'
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
	readonly containers?: ContainerCollectionRefBase
}
