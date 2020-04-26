/**
 * Auto-generated file. Do not change. 
 */
/**
 *
 * @example "port_to_door"
 *
 */
export type FreightType = "port_to_door" | "port_to_port" | "door_to_door" | "door_to_port";
export type LiftedFreightType = Omit<FreightType, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftFreightType = (original: FreightType) => {
    return original;
};