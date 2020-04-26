/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type PurchaseOrderLineItemRef = {
    readonly _object: Type.ObjectRef;
    /**
     * JSON-schema: string
     * @example "/purchase_orders/line_item"
     */
    readonly ref_type?: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/purchase_order_line_items/123"
     */
    readonly link?: string;
    /**
     * JSON-schema: integer
     * @example 123
     */
    readonly id?: number;
};
export type LiftedPurchaseOrderLineItemRef = Omit<PurchaseOrderLineItemRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftPurchaseOrderLineItemRef = (original: PurchaseOrderLineItemRef) => {
    return original;
};