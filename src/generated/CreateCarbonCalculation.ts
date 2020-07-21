/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { Coordinates } from './Coordinates'
import { Length } from './Length'
import { Weight } from './Weight'
export enum CreateCarbonCalculationFlightTypeTypes {
	FREIGHTER = 'freighter',
	BELLY_FREIGHTER = 'belly_freighter',
	UNKNOWN = 'unknown',
}
export enum CreateCarbonCalculationTruckingServiceTypeTypes {
	FTL = 'ftl',
	LTL = 'ltl',
	DRAYAGE = 'drayage',
	CARTAGE = 'cartage',
	LAST_MILE = 'last_mile',
	AIRPORT_TRANSFER = 'airport_transfer',
	AIR_CARTAGE = 'air_cartage',
}
export enum CreateCarbonCalculationTransportationModeTypes {
	AIR = 'air',
	OCEAN = 'ocean',
	TRUCK = 'truck',
	RAIL = 'rail',
}
export type CreateCarbonCalculation = {
	/**
	 * The exact weight being shipped. One of `weight`, `chargeable_weight`, or `teus` is required.
	 *
	 */
	readonly weight?: Weight
	/**
	 * The heavier of volumetric and actual weight.  One of `weight`, `chargeable_weight`, or `teus` is required.
	 *
	 */
	readonly chargeable_weight?: Weight
	/**
	 * The total distance traveled by the shipment.  This can be used instead of origin/destination locations.
	 *
	 */
	readonly distance?: Length
	/**
	 * The latitude and logitude of the origin.  One of `distance`, `origin_coordinates`, `origin_address`, or `origin_port` is required.
	 *
	 */
	readonly origin_coordinates?: Coordinates
	/**
	 * The physical address of the origin.  One of `distance`, `origin_coordinates`, `origin_address`, or `origin_port` is required.
	 *
	 */
	readonly origin_address?: Address
	/**
	 * The latitude and logitude of the destination.  One of `distance`, `destination_coordinates`, `destination_address`, or `destination_port` is required.
	 *
	 */
	readonly destination_coordinates?: Coordinates
	/**
	 * The physical address of the destination.  One of `distance`, `destination_coordinates`, `destination_address`, or `destination_port` is required.
	 *
	 */
	readonly destination_address?: Address
	/**
	 * Port of origin, used if no more specific origin location is provided.
	 *
	 * JSON-schema: string
	 */
	readonly origin_port?: string
	/**
	 * Port of destination, used if no more specific destination location is provided.
	 *
	 * JSON-schema: string
	 */
	readonly destination_port?: string
	/**
	 * For `transportation_mode: ocean`, indicates if the calculation was inland or not. Defaults to false.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_inland?: boolean
	/**
	 * For `transportation_mode: ocean`, indicates if the calculation is less than container load or not. Defaults to false.
	 *
	 * JSON-schema: boolean
	 */
	readonly is_lcl?: boolean
	/**
	 * For Air shipments, the type of plane used. Defaults to "unknown".
	 *
	 * JSON-schema: string
	 * @example "freighter"
	 */
	readonly flight_type?: CreateCarbonCalculationFlightTypeTypes
	/**
	 * For `transportation_mode: truck`, the type of service used.
	 *
	 * JSON-schema: string
	 * @example "drayage"
	 */
	readonly trucking_service_type?: CreateCarbonCalculationTruckingServiceTypeTypes
	/**
	 * The number of TEUs (Twenty-foot Equivalent Units) moved in the calculation. One of `weight`, `chargeable_weight`, or `teus` is required.
	 *
	 * JSON-schema: string
	 * @example "2"
	 */
	readonly teus?: string
	/**
	 * The mode of transportation for calculation. One of `air`, `ocean`, `truck`, or `rail`. If `transportation_mode` is `truck`, `ocean`, or `rail`, `country_code` in both `origin_address` and `destination_address` is required.
	 *
	 * JSON-schema: string
	 * @example "ocean"
	 */
	readonly transportation_mode: CreateCarbonCalculationTransportationModeTypes
}
export type LiftedCreateCarbonCalculation = CreateCarbonCalculation
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCreateCarbonCalculation = (
	original: CreateCarbonCalculation,
): LiftedCreateCarbonCalculation => {
	return original
}
