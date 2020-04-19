import { Either, right } from 'fp-ts/lib/Either'
import {
	ResolvableCollection,
	ResolvableObject,
	linkCollection,
	linkObject,
} from '../types/Link'
import { Option } from 'fp-ts/lib/Option'
import { Shipment } from '../generated'
import { ErrorInfo } from '../types/ErrorInfo'
import { toDateOrUndefined } from '../transformer/toDate'

export type LiftedShipment = Omit<
	Shipment,
	| 'booking'
	| 'legs'
	| 'customs_entries'
	| 'commercial_invoices'
	| 'documents'
	| 'updated_at'
	| 'archived_at'
	| 'estimated_departure_date'
	| 'actual_departure_date'
	| 'estimated_arrival_date'
	| 'actual_arrival_date'
	| 'estimated_picked_up_in_full_date'
	| 'actual_picked_up_in_full_date'
	| 'estimated_delivered_in_full_date'
	| 'actual_delivered_in_full_date'
> & {
	booking: Option<ResolvableObject>
	legs: Option<ResolvableCollection>
	customs_entries: Option<ResolvableCollection>
	commercial_invoices: Option<ResolvableCollection>
	documents: Option<ResolvableCollection>
	updated_at?: Date
	archived_at?: Date
	estimated_departure_date?: Date
	actual_departure_date?: Date
	estimated_arrival_date?: Date
	actual_arrival_date?: Date
	estimated_picked_up_in_full_date?: Date
	actual_picked_up_in_full_date?: Date
	estimated_delivered_in_full_date?: Date
	actual_delivered_in_full_date?: Date
}

export const liftShipment = (
	shipment: Shipment,
): Either<ErrorInfo, LiftedShipment> => {
	const {
		booking,
		legs,
		customs_entries,
		commercial_invoices,
		documents,
		updated_at,
		archived_at,
		estimated_departure_date,
		actual_departure_date,
		estimated_arrival_date,
		actual_arrival_date,
		estimated_picked_up_in_full_date,
		actual_picked_up_in_full_date,
		estimated_delivered_in_full_date,
		actual_delivered_in_full_date,
		...rest
	} = shipment

	return right({
		...rest,
		updated_at: toDateOrUndefined(updated_at),
		archived_at: toDateOrUndefined(archived_at),
		estimated_departure_date: toDateOrUndefined(estimated_departure_date),
		actual_departure_date: toDateOrUndefined(actual_departure_date),
		estimated_arrival_date: toDateOrUndefined(estimated_arrival_date),
		actual_arrival_date: toDateOrUndefined(actual_arrival_date),
		estimated_picked_up_in_full_date: toDateOrUndefined(
			estimated_picked_up_in_full_date,
		),
		actual_picked_up_in_full_date: toDateOrUndefined(
			actual_picked_up_in_full_date,
		),
		estimated_delivered_in_full_date: toDateOrUndefined(
			estimated_delivered_in_full_date,
		),
		actual_delivered_in_full_date: toDateOrUndefined(
			actual_delivered_in_full_date,
		),
		booking: linkObject(booking),
		legs: linkCollection(legs),
		customs_entries: linkCollection(customs_entries),
		commercial_invoices: linkCollection(commercial_invoices),
		documents: linkCollection(documents),
	})
}
