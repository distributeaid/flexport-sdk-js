/**
 * Auto-generated file. Do not change.
 */
export enum ShipmentStatusTypes {
	SELLER_LOCATION = 'seller_location',
	IN_TRANSIT_TO_DEPARTURE_PORT = 'in_transit_to_departure_port',
	DEPARTURE_PORT = 'departure_port',
	IN_TRANSIT_TO_ARRIVAL_PORT = 'in_transit_to_arrival_port',
	ARRIVAL_PORT = 'arrival_port',
	IN_TRANSIT_TO_FINAL_DESTINATION = 'in_transit_to_final_destination',
	FINAL_DESTINATION = 'final_destination',
}
/**
 *
 * @example "in_transit_to_arrival_port"
 *
 */
export type ShipmentStatus = ShipmentStatusTypes
export type LiftedShipmentStatus = ShipmentStatus
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentStatus = (
	original: ShipmentStatus,
): LiftedShipmentStatus => {
	return original
}
