/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type ContainerRef = {
    readonly _object: Type.ObjectRef;
    /**
     * JSON-schema: string
     * @example "/ocean/shipment_container"
     */
    readonly ref_type?: string;
    /**
     * JSON-schema: string
     * @example "https://api.flexport.com/ocean/shipment_containers/123"
     */
    readonly link?: string;
    /**
     * JSON-schema: integer
     * @example 123
     */
    readonly id?: number;
};
export type LiftedContainerRef = Omit<ContainerRef, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftContainerRef = (original: ContainerRef) => {
    return original;
};