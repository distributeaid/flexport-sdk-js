/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type Seaport = {
    /**
     * Type of the object
     */
    readonly _object: Type.Seaport;
    /**
     * JSON-schema: string
     * @example "3901"
     */
    readonly port_code?: string;
};
export type LiftedSeaport = Omit<Seaport, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftSeaport = (original: Seaport) => {
    return original;
};