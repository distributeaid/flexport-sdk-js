/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { Place } from "./Place";
import { BookingHsCode } from "./BookingHsCode";
export type AirBookingDetail = {
    /**
     * Type of the object
     */
    readonly _object: Type.AirBookingDetail;
    /**
     * JSON-schema: string
     * @example "FOB"
     */
    readonly incoterm?: "EXW" | "FOB" | "FAS" | "FCA" | "CPT" | "CFR" | "CIF" | "CIP" | "DAT" | "DAP" | "DDP" | "DPU";
    /**
     * JSON-schema: boolean
     * @example true
     */
    readonly wants_pickup_service?: boolean;
    /**
     * JSON-schema: boolean
     */
    readonly wants_delivery_service?: boolean;
    readonly origin_port?: Place;
    readonly destination_port?: Place;
    /**
     * JSON-schema: array
     */
    readonly product_descriptions?: BookingHsCode[];
};
export type LiftedAirBookingDetail = Omit<AirBookingDetail, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAirBookingDetail = (original: AirBookingDetail) => {
    return original;
};