/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { Address } from "./Address";
import { VatNumber } from "./VatNumber";
export type CompanyEntity = {
    /**
     * Type of the object
     */
    readonly _object: Type.CompanyEntity;
    /**
     * JSON-schema: integer
     * @example 9281
     */
    readonly id?: number;
    /**
     * JSON-schema: string
     * @example "Zoomit"
     */
    readonly name?: string;
    /**
     * JSON-schema: string
     * @example "zoomit_ref"
     */
    readonly ref?: string;
    readonly mailing_address?: Address;
    /**
     * JSON-schema: array
     */
    readonly vat_numbers?: VatNumber[];
};
export type LiftedCompanyEntity = Omit<CompanyEntity, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCompanyEntity = (original: CompanyEntity) => {
    return original;
};