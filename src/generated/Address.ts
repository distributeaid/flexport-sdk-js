/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type Address = {
    /**
     * Type of the object
     */
    readonly _object: Type.Address;
    /**
     * JSON-schema: string
     * @example "1641 Settlers Lane"
     */
    readonly street_address?: string;
    /**
     * JSON-schema: string
     * @example "STE 2918"
     */
    readonly street_address2?: string;
    /**
     * JSON-schema: string
     * @example "Albany"
     */
    readonly city?: string;
    /**
     * JSON-schema: string
     * @example "MN"
     */
    readonly state?: string;
    /**
     * JSON-schema: string
     * @example "United States of America"
     */
    readonly country?: string;
    /**
     * JSON-schema: string
     * @example "US"
     */
    readonly country_code?: string;
    /**
     * JSON-schema: string
     * @example "56307"
     */
    readonly zip?: string;
    /**
     * JSON-schema: string
     * @example "America/Los_Angeles"
     */
    readonly timezone?: string;
    /**
     * JSON-schema: string
     * @example "address_ref_x"
     */
    readonly ref?: string;
    /**
     * JSON-schema: string
     * @example "US AL2"
     */
    readonly unlocode?: string;
};
export type LiftedAddress = Omit<Address, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftAddress = (original: Address) => {
    return original;
};