/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type LegRef = {
    readonly _object: Type.ObjectRef;
    /**
     * JSON-schema: string
     * @example "/shipment_leg"
     */
    readonly ref_type?: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/shipment_legs/123"
     */
    readonly link?: string;
    /**
     * JSON-schema: integer
     * @example 123
     */
    readonly id?: number;
};
export type LiftedLegRef = Omit<LegRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftLegRef = (original: LegRef) => {
    return original;
};