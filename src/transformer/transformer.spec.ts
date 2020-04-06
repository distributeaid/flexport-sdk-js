import { transformResponse } from './transform'
import { PAGE_TYPE, Shipment, Page, SHIPMENT_TYPE } from '../types'
import { isRight, Right } from 'fp-ts/lib/Either'

describe('transformer', () => {
	it('should transform an API response', () => {
		const maybeShipments = transformResponse({
			_object: '/api/response',
			data: {
				_object: '/api/collections/paginated',
				data: [
					{
						_object: '/shipment',
						actual_arrival_date: null,
						actual_delivered_in_full_date: '2020-02-26T12:00:00.000+02:00',
						actual_departure_date: null,
						actual_picked_up_in_full_date: '2020-02-13T12:00:00.000+00:00',
						air_shipment: null,
						archived_at: null,
						arrival_date: null,
						booking: null,
						buyers: [],
						calculated_volume: {
							_object: '/quantity/volume',
							unit: 'cbm',
							value: 52.416,
						},
						calculated_weight: {
							_object: '/quantity/weight',
							unit: 'kg',
							value: 22100.0,
						},
						cargo_ready_date: '2020-01-15',
						commercial_invoices: {
							_object: '/api/refs/collection',
							link:
								'https://api.flexport.com/commercial_invoices?f.shipment.id=677632',
							ref_type: '/commercial_invoice',
						},
						consignees: [],
						created_date: '2020-01-28T17:51:52.320Z',
						customs_entries: {
							_object: '/api/refs/collection',
							link:
								'https://api.flexport.com/customs_entries?f.shipment.id=677632',
							ref_type: '/customs_entry',
						},
						delivered_in_full_date: '2020-02-26T12:00:00.000+02:00',
						departure_date: null,
						documents: {
							_object: '/api/refs/collection',
							link: 'https://api.flexport.com/documents?f.shipment.id=677632',
							ref_type: '/document',
						},
						estimated_arrival_date: null,
						estimated_delivered_in_full_date: '2020-02-26T12:00:00.000+02:00',
						estimated_departure_date: null,
						estimated_picked_up_in_full_date: '2020-02-13T12:00:00.000+00:00',
						freight_type: 'door_to_door',
						id: 677632,
						importers_of_record: [],
						incoterm: 'DDP',
						it_number: null,
						items: [],
						legs: {
							_object: '/api/refs/collection',
							link:
								'https://api.flexport.com/shipment_legs?f.shipment.id=677632',
							ref_type: '/shipment_leg',
						},
						metadata: {},
						name: 'Soap Shipment 2.0',
						ocean_shipment: null,
						picked_up_in_full_date: '2020-02-13T12:00:00.000+00:00',
						pieces: 0,
						priority: 'standard',
						sellers: [],
						shippers: [
							{
								_object: '/company_entity',
								id: 765250,
								mailing_address: null,
								name: 'Help Refugees',
								ref: 'id-765250',
								vat_numbers: [],
							},
						],
						status: 'final_destination',
						transportation_mode: 'truck_intl',
						updated_at: '2020-03-23T20:02:28.770Z',
					},
				],
				next: null,
				prev: null,
				total_count: 1,
			},
			error: null,
			self: 'https://api.flexport.com/shipments',
			version: 2,
		})
		expect(isRight(maybeShipments)).toBeTruthy()
		const shipments = (maybeShipments as Right<Page<Shipment>>).right
		expect(shipments._object).toEqual(PAGE_TYPE)
		expect(shipments.data).toHaveLength(1)
		expect(shipments.data[0]._object).toEqual(SHIPMENT_TYPE)
		expect(shipments.data[0].actual_delivered_in_full_date).toBeInstanceOf(Date)
	})
})
