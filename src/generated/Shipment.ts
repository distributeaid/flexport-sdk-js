/**
 * Auto-generated file. Do not change. 
 */
import { BookingRef } from "./BookingRef";
import { Type } from "./Type";
import { TypedApiObject } from "../types/TypedApiObject";
export type Shipment = {
    readonly _object: Type.Shipment;
    /**
     * The booking associated with this shipment
     *
     */
    readonly booking?: BookingRef;
    /**
     * Date when the shipment was archived, if applicable.
     *
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly archived_at?: string;
    /**
     * Actual arrival date to the last port of the main voyage.
    NOTE: This field is not kept up to date with the actual arrival dates of the shipment legs.
    
     *
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly actual_arrival_date?: string;
};
export type LiftedShipment = TypedApiObject & Omit<Shipment, "archived_at" | "actual_arrival_date"> & {
    /**
     * Date when the shipment was archived, if applicable.
     */
    readonly archived_at?: Date;
    /**
     * Actual arrival date to the last port of the main voyage.
    NOTE: This field is not kept up to date with the actual arrival dates of the shipment legs.
    
     */
    readonly actual_arrival_date?: Date;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipment = (original: Shipment): LiftedShipment => {
    const { archived_at, actual_arrival_date, ...rest } = original;
    return {
        ...rest,
        archived_at: archived_at !== undefined ? new Date(archived_at) : undefined,
        actual_arrival_date: actual_arrival_date !== undefined ? new Date(actual_arrival_date) : undefined
    };
};