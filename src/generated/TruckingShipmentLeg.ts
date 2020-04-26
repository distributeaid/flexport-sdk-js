/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ContainerLegCollectionRef } from "./ContainerLegCollectionRef";
import { Option } from "./Option";
import { ResolvableCollection } from "./ResolvableCollection";
export type TruckingShipmentLeg = {
    readonly _object: Type.TruckingShipmentLeg;
    /**
     * JSON-schema: string
     * @example "FBA123456789"
     */
    readonly tracking_number?: string;
    /**
     * JSON-schema: string
     */
    readonly service_type?: "ltl" | "ftl" | "drayage" | "cartage";
    /**
     * JSON-schema: integer
     * @example 32
     */
    readonly pieces?: number;
    readonly container_legs?: ContainerLegCollectionRef;
};
export type LiftedTruckingShipmentLeg = Omit<TruckingShipmentLeg, "container_legs"> & {
    readonly container_legs?: Option<ResolvableCollection>;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTruckingShipmentLeg = (original: TruckingShipmentLeg) => {
    return original;
};