/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ShipmentRef } from "./ShipmentRef";
import { AdditionalDates } from "./AdditionalDates";
import { ShipmentNode } from "./ShipmentNode";
import { TransportationMode } from "./TransportationMode";
import { AirShipmentLeg } from "./AirShipmentLeg";
import { OceanShipmentLeg } from "./OceanShipmentLeg";
import { TruckingShipmentLeg } from "./TruckingShipmentLeg";
import { RailShipmentLeg } from "./RailShipmentLeg";
import { Option } from "./Option";
import { ResolvableObject } from "./ResolvableObject";
export type ShipmentLeg = {
    /**
     * Type of the object
     */
    readonly _object: Type.ShipmentLeg;
    /**
     * JSON-schema: integer
     * @example 948211
     */
    readonly id?: number;
    readonly shipment?: ShipmentRef;
    /**
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly estimated_arrival_date?: string;
    /**
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly actual_arrival_date?: string;
    /**
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly estimated_departure_date?: string;
    /**
     * JSON-schema: string (date-time)
     * @example "1970-01-01T10:05:08+01:00"
     */
    readonly actual_departure_date?: string;
    readonly additional_dates?: AdditionalDates;
    readonly origin: ShipmentNode;
    readonly destination: ShipmentNode;
    readonly transportation_mode?: TransportationMode;
    /**
     * JSON-schema: string
     * @example "Liberty Carrier"
     */
    readonly carrier_name?: string;
    readonly air_leg?: AirShipmentLeg;
    readonly ocean_leg?: OceanShipmentLeg;
    readonly trucking_leg?: TruckingShipmentLeg;
    readonly rail_leg?: RailShipmentLeg;
    /**
     * [DEPRECATED] See additional_dates
     * @deprecated Do not use! This field is deprecated.
     *
     * JSON-schema: string (date)
     * @example "1970-01-01"
     */
    readonly cargo_ready_date?: string;
};
export type LiftedShipmentLeg = Omit<ShipmentLeg, "estimated_arrival_date" | "actual_arrival_date" | "estimated_departure_date" | "actual_departure_date" | "shipment"> & {
    readonly estimated_arrival_date?: Date;
    readonly actual_arrival_date?: Date;
    readonly estimated_departure_date?: Date;
    readonly actual_departure_date?: Date;
    readonly shipment?: Option<ResolvableObject>;
};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftShipmentLeg = (original: ShipmentLeg) => {
    return original;
};