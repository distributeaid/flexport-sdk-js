/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type Railport = {
    /**
     * Type of the object
     */
    readonly _object: Type.Railport;
    /**
     * JSON-schema: string
     * @example "3901"
     */
    readonly port_code?: string;
};
export type LiftedRailport = Omit<Railport, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftRailport = (original: Railport) => {
    return original;
};