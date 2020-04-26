/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { Money } from "./Money";
import { Weight } from "./Weight";
import { Volume } from "./Volume";
import { ProductRef } from "./ProductRef";
export type CommercialInvoiceLineItem = {
    /**
     * Type of the object. Always /commercial_invoice_line_item for this object.
     */
    readonly _object: Type.CommercialInvoiceLineItem;
    readonly price_per_unit?: Money;
    readonly value?: Money;
    /**
     * JSON-schema: integer
     * @example 10
     */
    readonly total_units?: number;
    /**
     * JSON-schema: string
     * @example "XYZ123"
     */
    readonly container_number?: string;
    /**
     * JSON-schema: string
     * @example "9876-ABC"
     */
    readonly purchase_order_number?: string;
    readonly weight?: Weight;
    readonly volume?: Volume;
    readonly product?: ProductRef;
};
export type LiftedCommercialInvoiceLineItem = Omit<CommercialInvoiceLineItem, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoiceLineItem = (original: CommercialInvoiceLineItem) => {
    return original;
};