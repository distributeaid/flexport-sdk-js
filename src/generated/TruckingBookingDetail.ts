/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type TruckingBookingDetail = {
    /**
     * Type of the object
     */
    readonly _object: Type.TruckingBookingDetail;
    /**
     * JSON-schema: boolean
     */
    readonly is_ftl?: boolean;
    /**
     * JSON-schema: string
     * @example "collect"
     */
    readonly payment_terms?: "collect" | "prepaid";
    /**
     * JSON-schema: string
     * @example "Wristwatches"
     */
    readonly description_of_products?: string;
};
export type LiftedTruckingBookingDetail = Omit<TruckingBookingDetail, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftTruckingBookingDetail = (original: TruckingBookingDetail) => {
    return original;
};