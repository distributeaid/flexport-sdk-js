/**
 * Auto-generated file. Do not change. 
 */
import { WriteProductProperty } from "./WriteProductProperty";
import { WriteProductClassification } from "./WriteProductClassification";
export type WriteProduct = {
    /**
     * Always required. Name of product
     *
     * JSON-schema: string
     * @example "AC Adapter 12V"
     */
    readonly name: string;
    /**
     * Always required. SKU of product
     *
     * JSON-schema: string
     * @example "WDVCDFD-RM00472"
     */
    readonly sku: string;
    /**
     * Always required. The category of the product
     *
     * JSON-schema: string
     * @example "Cosmetics"
     */
    readonly product_category: string;
    /**
     * Always required. Nation in which the product is manufactured
     *
     * JSON-schema: string
     * @example "China"
     */
    readonly country_of_origin: string;
    /**
     * Array of product properties, custom key value pairs that describe the product
     *
     * JSON-schema: array
     */
    readonly product_properties?: WriteProductProperty[];
    /**
     * Array of product classifications. If a value is specified, the array of product classifications will replace the existing set of product classifications.
     *
     * JSON-schema: array
     */
    readonly classifications?: WriteProductClassification[];
};
export type LiftedWriteProduct = Omit<WriteProduct, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWriteProduct = (original: WriteProduct) => {
    return original;
};