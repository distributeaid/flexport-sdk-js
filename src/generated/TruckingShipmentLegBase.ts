import { ContainerLegCollectionRefBase } from './ContainerLegCollectionRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type TruckingShipmentLegBase = {
	readonly _object: '/trucking/shipment_leg'
	/**
	 * JSON-schema: string
	 * @example "FBA123456789"
	 */
	readonly tracking_number?: string
	/**
	 * JSON-schema: string
	 */
	readonly service_type?: 'ltl' | 'ftl' | 'drayage' | 'cartage'
	/**
	 * JSON-schema: integer
	 * @example 32
	 */
	readonly pieces?: number
	readonly container_legs?: ContainerLegCollectionRefBase
}
