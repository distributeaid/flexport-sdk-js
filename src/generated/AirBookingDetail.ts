/**
 * Auto-generated file. Do not change.
 */
import { BookingHsCode } from './BookingHsCode'
import { Place } from './Place'
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export enum AirBookingDetailIncotermTypes {
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
export type AirBookingDetail = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.AirBookingDetail
	/**
	 * JSON-schema: string
	 * @example "FOB"
	 */
	readonly incoterm?: AirBookingDetailIncotermTypes
	/**
	 * JSON-schema: boolean
	 * @example true
	 */
	readonly wants_pickup_service?: boolean
	/**
	 * JSON-schema: boolean
	 * @example false
	 */
	readonly wants_delivery_service?: boolean
	readonly origin_port?: Place
	readonly destination_port?: Place
	/**
	 * JSON-schema: array
	 */
	readonly product_descriptions?: BookingHsCode[]
}
export type LiftedAirBookingDetail = TypedApiObject & AirBookingDetail
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAirBookingDetail = (
	original: AirBookingDetail,
): LiftedAirBookingDetail => {
	return original
}
