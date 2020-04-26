/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type HsCode = {
    /**
     * String representing the object’s type. Always `/hs_code` for this object.
     */
    readonly _object: Type.HsCode;
    /**
     * Description of HS or HTS code classification.
     *
     * JSON-schema: string
     * @example "N-Butyl-2,2,6,6-tetramethylpiperidin-4-amine (CAS No. 36177-92-1) (provided for in subheading 2933.39.91)"
     */
    readonly description?: string;
    /**
     * 6 digit (international HS) or 10 digit (US HTS) code.
     *
     * JSON-schema: string
     * @example 9101
     */
    readonly code?: string;
    /**
     * JSON-schema: string
     * @example "US"
     */
    readonly country_code?: string;
};
export type LiftedHsCode = Omit<HsCode, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftHsCode = (original: HsCode) => {
    return original;
};