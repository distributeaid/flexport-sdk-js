/**
 * Auto-generated file. Do not change.
 */
/**
 *
 * @example "ocean"
 *
 */
export type TransportationMode = 'ocean' | 'air'
export type LiftedTransportationMode = TransportationMode
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTransportationMode = (
	original: TransportationMode,
): LiftedTransportationMode => original
