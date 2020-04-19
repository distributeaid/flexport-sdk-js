import { CreateBookingHsCode } from './CreateBookingHsCode'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type CreateAirBooking = {
	/**
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
	 * One of `origin_port_us_cbp_port_code`, `origin_port_loc_code`, `origin_port_iata_code`, or `origin_port_icao_code` is required if `pickup_service` = `no`. Unique port reference code used by US CBP, not applicable for non-US airports.
	 *
	 * JSON-schema: string
	 */
	readonly origin_port_us_cbp_port_code?: string
	/**
	 * One of `origin_port_us_cbp_port_code`, `origin_port_loc_code`, `origin_port_iata_code`, or `origin_port_icao_code` is required if `pickup_service` = `no`. Unique port reference code published in the UN/LOCODE.
	 *
	 * JSON-schema: string
	 * @example "HKHKG"
	 */
	readonly origin_port_loc_code?: string
	/**
	 * One of `origin_port_us_cbp_port_code`, `origin_port_loc_code`, `origin_port_iata_code`, or `origin_port_icao_code` is required if `pickup_service` = `no`. Unique airport reference code used by IATA.
	 *
	 * JSON-schema: string
	 * @example "HKG"
	 */
	readonly origin_port_iata_code?: string
	/**
	 * One of `origin_port_us_cbp_port_code`, `origin_port_loc_code`, `origin_port_iata_code`, or `origin_port_icao_code` is required if `pickup_service` = `no`. Unique airport reference code used by ICAO.
	 *
	 * JSON-schema: string
	 * @example "VHHH"
	 */
	readonly origin_port_icao_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code`, `destination_port_loc_code`, `destination_port_iata_code`, or `destination_port_icao_code`. Unique port reference code used by US CBP, not applicable for non-US airports.
	 *
	 * JSON-schema: string
	 */
	readonly destination_port_us_cbp_port_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code`, `destination_port_loc_code`, `destination_port_iata_code`, or `destination_port_icao_code`. Unique port reference code published in the UN/LOCODE.
	 *
	 * JSON-schema: string
	 */
	readonly destination_port_loc_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code`, `destination_port_loc_code`, `destination_port_iata_code`, or `destination_port_icao_code`. Unique airport reference code used by IATA.
	 *
	 * JSON-schema: string
	 */
	readonly destination_port_iata_code?: string
	/**
	 * Optional, provide one of `destination_port_us_cbp_port_code`, `destination_port_loc_code`, `destination_port_iata_code`, or `destination_port_icao_code`. Unique airport reference code used by ICAO.
	 *
	 * JSON-schema: string
	 */
	readonly destination_port_icao_code?: string
}
