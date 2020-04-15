import { ContainerCountsBase } from './ContainerCountsBase'
import { CreateBookingHsCodeBase } from './CreateBookingHsCodeBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateOceanBookingBase = {
	/**
	 * Always required. Whether the booking is for an LCL shipment. If false, the booking is FCL. If true, the booking is LCL.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_lcl: boolean
	readonly container_counts: ContainerCountsBase
	/**
	 * Always required. The Incoterm of your shipment
	 *
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm:
		| 'EXW'
		| 'FOB'
		| 'FAS'
		| 'FCA'
		| 'CPT'
		| 'CFR'
		| 'CIF'
		| 'CIP'
		| 'DAT'
		| 'DAP'
		| 'DDP'
		| 'DPU'
	/**
	 * JSON-schema: array
	 */
	readonly product_descriptions: CreateBookingHsCodeBase[]
	/**
	 * Always required. Whether transportation is requested from the origin location to the port.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_pickup_service: boolean
	/**
	 * Optional. Whether transportation is requested from the destination port to destination address. If unknown, then leave as `null`.
	 *
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_delivery_service?: boolean
	/**
	 * One of `origin_port_us_cbp_port_code` or  `origin_port_loc_code` is required if `pickup_service` = `no`. Unique port reference code used by US Customs and Border Protection.
	 *
	 * JSON-schema: string
	 * @example 57078
	 */
	readonly origin_port_us_cbp_port_code?: string
	/**
	 * One of `origin_port_us_cbp_port_code` or  `origin_port_loc_code` is required if `pickup_service` = `no`. Unique port reference code used by US CBP.
	 *
	 * JSON-schema: string
	 * @example "CNYTN"
	 */
	readonly origin_port_loc_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code` or `destination_port_loc_code`. Unique port reference code published in the United Nations Code for Trade and Transport Locations (UN/LOCODE).
	 *
	 * JSON-schema: string
	 * @example 2704
	 */
	readonly destination_port_us_cbp_port_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code` or `destination_port_loc_code`. Unique port reference code published in the United Nations Code for Trade and Transport Locations (UN/LOCODE).
	 *
	 * JSON-schema: string
	 * @example "USLAX"
	 */
	readonly destination_port_loc_code?: string
}
