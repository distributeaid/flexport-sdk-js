/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ContainerCounts } from "./ContainerCounts";
import { Place } from "./Place";
import { BookingHsCode } from "./BookingHsCode";
export type OceanBookingDetail = {
    /**
     * Type of the object
     */
    readonly _object: Type.OceanBookingDetail;
    /**
     * JSON-schema: boolean
     * @example true
     */
    readonly is_lcl?: boolean;
    readonly container_counts?: ContainerCounts;
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
export type LiftedOceanBookingDetail = Omit<OceanBookingDetail, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftOceanBookingDetail = (original: OceanBookingDetail) => {
    return original;
};