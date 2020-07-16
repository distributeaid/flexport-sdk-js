/**
 * Auto-generated file. Do not change. 
 */
import { Money } from "./Money";
export type CommercialInvoiceLineItem = {
    readonly first_sale_value?: Money;
};
export type LiftedCommercialInvoiceLineItem = CommercialInvoiceLineItem;
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceLineItem = (original: CommercialInvoiceLineItem): LiftedCommercialInvoiceLineItem => { return original; };