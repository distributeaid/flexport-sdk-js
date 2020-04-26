/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type CommercialInvoiceCollectionRef = {
    readonly _object: Type.CollectionRef;
    /**
     * JSON-schema: string
     * @example "/commercial_invoice"
     */
    readonly ref_type: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/commercial_invoices?f.shipment.id=2983"
     */
    readonly link: string;
};
export type LiftedCommercialInvoiceCollectionRef = Omit<CommercialInvoiceCollectionRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceCollectionRef = (original: CommercialInvoiceCollectionRef) => {
    return original;
};