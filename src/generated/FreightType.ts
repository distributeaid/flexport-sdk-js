/**
 * Auto-generated file. Do not change.
 */
export enum FreightTypeTypes {
	PORT_TO_DOOR = 'port_to_door',
	PORT_TO_PORT = 'port_to_port',
	DOOR_TO_DOOR = 'door_to_door',
	DOOR_TO_PORT = 'door_to_port',
}
/**
 *
 * @example "port_to_door"
 *
 */
export type FreightType = FreightTypeTypes
export type LiftedFreightType = FreightType
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftFreightType = (original: FreightType): LiftedFreightType => {
	return original
}
