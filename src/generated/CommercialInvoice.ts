/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { Address } from "./Address";
import { Money } from "./Money";
import { Weight } from "./Weight";
import { Volume } from "./Volume";
import { CommercialInvoiceLineItem } from "./CommercialInvoiceLineItem";
import { ShipmentRef } from "./ShipmentRef";
import { Option } from "./Option";
import { ResolvableObject } from "./ResolvableObject";
export type CommercialInvoice = {
    /**
     * Type of the object. Always /commercial_invoice for this object.
     */
    readonly _object: Type.CommercialInvoice;
    /**
     * Unique identifier for the commercial invoice.
     *
     * JSON-schema: string
     * @example "abcxyz-23456-def"
     */
    readonly id?: string;
    /**
     * JSON-schema: string
     * @example "ABCDEFGHIJKLMNOP"
     */
    readonly invoice_number?: string;
    /**
     * JSON-schema: array
     */
    readonly manufacturer_addresses?: Address[];
    readonly total_value?: Money;
    /**
     * Total units on this commercial invoice.
     *
     * JSON-schema: string
     * @example "123.0"
     */
    readonly total_unit_count?: string;
    readonly total_weight?: Weight;
    readonly total_volume?: Volume;
    /**
     * JSON-schema: array
     */
    readonly line_items?: CommercialInvoiceLineItem[];
    readonly shipment?: ShipmentRef;
};
export type LiftedCommercialInvoice = Omit<CommercialInvoice, "shipment"> & {
    readonly shipment?: Option<ResolvableObject>;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoice = (original: CommercialInvoice) => {
    return original;
};