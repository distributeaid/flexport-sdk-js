import { ShipmentRefBase } from './ShipmentRefBase'
import { AdditionalDatesBase } from './AdditionalDatesBase'
import { ShipmentNodeBase } from './ShipmentNodeBase'
import { TransportationModeBase } from './TransportationModeBase'
import { AirShipmentLegBase } from './AirShipmentLegBase'
import { OceanShipmentLegBase } from './OceanShipmentLegBase'
import { TruckingShipmentLegBase } from './TruckingShipmentLegBase'
import { RailShipmentLegBase } from './RailShipmentLegBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type ShipmentLegBase = {
	/**
	 * Type of the object
	 */
	readonly _object: '/shipment_leg'
	/**
	 * JSON-schema: integer
	 * @example 948211
	 */
	readonly id?: number
	readonly shipment?: ShipmentRefBase
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_arrival_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_arrival_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly estimated_departure_date?: string
	/**
	 * JSON-schema: string (date-time)
	 * @example "1970-01-01T10:05:08+01:00"
	 */
	readonly actual_departure_date?: string
	readonly additional_dates?: AdditionalDatesBase
	readonly origin?: ShipmentNodeBase
	readonly destination?: ShipmentNodeBase
	readonly transportation_mode?: TransportationModeBase
	/**
	 * JSON-schema: string
	 * @example "Liberty Carrier"
	 */
	readonly carrier_name?: string
	readonly air_leg?: AirShipmentLegBase
	readonly ocean_leg?: OceanShipmentLegBase
	readonly trucking_leg?: TruckingShipmentLegBase
	readonly rail_leg?: RailShipmentLegBase
	/**
	 * [DEPRECATED] See additional_dates
	 *
	 * JSON-schema: string (date)
	 * @example "1970-01-01"
	 */
	readonly cargo_ready_date?: string
}
