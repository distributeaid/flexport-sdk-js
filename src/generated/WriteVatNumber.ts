/**
 * Auto-generated file. Do not change. 
 */
export type WriteVatNumber = {
    /**
     * ISO 3166 two-letter country code
     *
     * JSON-schema: string
     * @example "GB"
     */
    readonly country_code: string;
    /**
     * Full VAT number, including the country code
     *
     * JSON-schema: string
     * @example "GB 123456789"
     */
    readonly number: string;
};
export type LiftedWriteVatNumber = Omit<WriteVatNumber, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWriteVatNumber = (original: WriteVatNumber) => {
    return original;
};