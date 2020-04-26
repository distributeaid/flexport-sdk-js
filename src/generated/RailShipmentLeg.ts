/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ContainerLegCollectionRef } from "./ContainerLegCollectionRef";
import { Option } from "./Option";
import { ResolvableCollection } from "./ResolvableCollection";
export type RailShipmentLeg = {
    readonly _object: Type.RailShipmentLeg;
    readonly container_legs?: ContainerLegCollectionRef;
};
export type LiftedRailShipmentLeg = Omit<RailShipmentLeg, "container_legs"> & {
    readonly container_legs?: Option<ResolvableCollection>;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftRailShipmentLeg = (original: RailShipmentLeg) => {
    return original;
};