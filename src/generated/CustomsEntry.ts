/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ShipmentRef } from "./ShipmentRef";
import { Option } from "./Option";
import { ResolvableObject } from "./ResolvableObject";
export type CustomsEntry = {
    /**
     * Type of the object. Always /customs_entry for this object.
     */
    readonly _object: Type.CustomsEntry;
    /**
     * Unique identifier for the customs entry.
     *
     * JSON-schema: string (string)
     */
    readonly id?: string;
    /**
     * JSON-schema: string
     */
    readonly entry_number?: string;
    /**
     * The release status for this entry.
     *
     * JSON-schema: string
     */
    readonly release_status?: "cleared" | "customs_hold" | "pending";
    /**
     * The cargo release date for this entry.
     *
     * JSON-schema: string (date)
     * @example "1970-01-01"
     */
    readonly release_date?: string;
    readonly shipment?: ShipmentRef;
};
export type LiftedCustomsEntry = Omit<CustomsEntry, "shipment"> & {
    readonly shipment?: Option<ResolvableObject>;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCustomsEntry = (original: CustomsEntry) => {
    return original;
};