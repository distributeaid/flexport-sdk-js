/**
 * Auto-generated file. Do not change.
 */
/**
 *
 * @example "in_transit_to_arrival_port"
 *
 */
export type ShipmentStatus =
	| 'seller_location'
	| 'in_transit_to_departure_port'
	| 'departure_port'
	| 'in_transit_to_arrival_port'
	| 'arrival_port'
	| 'in_transit_to_final_destination'
	| 'final_destination'
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentStatus = (original: ShipmentStatus) => {
	return original
}
