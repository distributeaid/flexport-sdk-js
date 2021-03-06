/**
 * Auto-generated file. Do not change.
 */
import { ContainerCounts } from './ContainerCounts'
import { CreateBookingHsCode } from './CreateBookingHsCode'
export enum CreateOceanBookingIncotermTypes {
	EXW = 'EXW',
	FOB = 'FOB',
	FAS = 'FAS',
	FCA = 'FCA',
	CPT = 'CPT',
	CFR = 'CFR',
	CIF = 'CIF',
	CIP = 'CIP',
	DAT = 'DAT',
	DAP = 'DAP',
	DDP = 'DDP',
	DPU = 'DPU',
}
export type CreateOceanBooking = {
	/**
	 * Always required. Whether the booking is for an LCL shipment. If false, the booking is FCL. If true, the booking is LCL.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_lcl: boolean
	readonly container_counts: ContainerCounts
	/**
	 * Always required. The Incoterm of your shipment
	 *
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm: CreateOceanBookingIncotermTypes
	/**
	 * JSON-schema: array
	 */
	readonly product_descriptions: CreateBookingHsCode[]
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
export type LiftedCreateOceanBooking = CreateOceanBooking
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateOceanBooking = (
	original: CreateOceanBooking,
): LiftedCreateOceanBooking => {
	return original
}
