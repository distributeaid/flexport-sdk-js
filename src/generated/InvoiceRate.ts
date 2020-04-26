/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
/**
 * Describes the rate per unit used to calculate the price of a line item
 */
export type InvoiceRate = {
    /**
     * The type of the object
     */
    readonly _object: Type.InvoiceRate;
    /**
     * numeric value described by qualifier
     *
     * JSON-schema: string (decimal)
     * @example "2.31"
     */
    readonly value?: string;
    /**
     * describes what the value represents
     *
     * JSON-schema: string
     * @example "'USD', '% Drayage Base'"
     */
    readonly qualifier?: string;
};
export type LiftedInvoiceRate = Omit<InvoiceRate, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 * Describes the rate per unit used to calculate the price of a line item
 */
export const liftInvoiceRate = (original: InvoiceRate) => {
    return original;
};