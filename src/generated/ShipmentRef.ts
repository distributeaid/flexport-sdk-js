/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type ShipmentRef = {
    readonly _object: Type.ObjectRef;
    /**
     * JSON-schema: string
     * @example "/shipment"
     */
    readonly ref_type: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/shipments/123"
     */
    readonly link: string;
    /**
     * JSON-schema: integer
     * @example 123
     */
    readonly id: number;
};
export type LiftedShipmentRef = Omit<ShipmentRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentRef = (original: ShipmentRef) => {
    return original;
};