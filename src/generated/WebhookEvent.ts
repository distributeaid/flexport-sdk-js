/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
import { ShipmentEventData } from "./ShipmentEventData";
export type WebhookEvent = {
    /**
     * Type of the object
     */
    readonly _object: Type.WebhookEvent;
    /**
     * JSON-schema: integer
     * @example 354987
     */
    readonly id?: number;
    /**
     * JSON-schema: integer
     * @example 2
     */
    readonly version?: number;
    /**
     * JSON-schema: string
     * @example "2019-04-16T18:05:10.964Z"
     */
    readonly created_at?: string;
    /**
     * JSON-schema: string
     * @example "2019-04-16T18:05:10.964Z"
     */
    readonly occurred_at?: string;
    /**
     * JSON-schema: string
     * @example "/shipment_leg#departed"
     */
    readonly type?: string;
    readonly data?: ShipmentEventData;
};
export type LiftedWebhookEvent = Omit<WebhookEvent, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftWebhookEvent = (original: WebhookEvent) => {
    return original;
};