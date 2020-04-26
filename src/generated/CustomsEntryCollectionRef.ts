/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type CustomsEntryCollectionRef = {
    readonly _object: Type.CollectionRef;
    /**
     * JSON-schema: string
     * @example "/customs_entry"
     */
    readonly ref_type: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/customs_entries?f.shipment.id=2983"
     */
    readonly link: string;
};
export type LiftedCustomsEntryCollectionRef = Omit<CustomsEntryCollectionRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCustomsEntryCollectionRef = (original: CustomsEntryCollectionRef) => {
    return original;
};