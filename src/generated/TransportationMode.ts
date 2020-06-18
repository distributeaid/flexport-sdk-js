/**
 * Auto-generated file. Do not change.
 */
export enum TransportationModeTypes {
	OCEAN = 'ocean',
	AIR = 'air',
	TRUCK = 'truck',
	RAIL = 'rail',
	UNKNOWN_TRANSPORTATION = 'unknown_transportation',
	OCEAN_AIR = 'ocean_air',
	TRUCK_INTL = 'truck_intl',
	WAREHOUSE_STORAGE = 'warehouse_storage',
}
/**
 *
 * @example "ocean"
 *
 */
export type TransportationMode = TransportationModeTypes
export type LiftedTransportationMode = TransportationMode
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTransportationMode = (
	original: TransportationMode,
): LiftedTransportationMode => {
	return original
}
