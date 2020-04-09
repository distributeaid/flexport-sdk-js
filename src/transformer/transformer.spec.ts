import { transformPaginatedResponse, transformResponse } from './transform'
import { PAGE_TYPE, Shipment, Page, SHIPMENT_TYPE, ShipmentLeg } from '../types'
import { isRight, Right } from 'fp-ts/lib/Either'
import * as fs from 'fs'
import * as path from 'path'

const shipmentsPageJSON = JSON.parse(
	fs
		.readFileSync(path.join(process.cwd(), 'src', 'testdata', 'shipments.json'))
		.toString(),
)

const shipmentLegsPageJSON = JSON.parse(
	fs
		.readFileSync(
			path.join(process.cwd(), 'src', 'testdata', 'shipmentlegs.json'),
		)
		.toString(),
)

const shipmentJSON = JSON.parse(
	fs
		.readFileSync(path.join(process.cwd(), 'src', 'testdata', 'shipment.json'))
		.toString(),
)

describe('transformer', () => {
	let shipments: Page<Shipment>
	it('should transform an API page response', () => {
		const maybeShipments = transformPaginatedResponse<Shipment>()(
			shipmentsPageJSON,
		)
		expect(isRight(maybeShipments)).toBeTruthy()
		shipments = (maybeShipments as Right<Page<Shipment>>).right
		expect(shipments._object).toEqual(PAGE_TYPE)
		expect(shipments.items).toHaveLength(1)
		expect(shipments.items[0]._object).toEqual(SHIPMENT_TYPE)
		expect(shipments.items[0].actual_delivered_in_full_date).toBeInstanceOf(
			Date,
		)
		const bookingLink = shipments.items[0].booking
		const legsLink = shipments.items[0].legs
		const customsEntriesLink = shipments.items[0].customs_entries
		const commercialInvoicesLink = shipments.items[0].commercial_invoices
		const documentsLink = shipments.items[0].documents
		expect(bookingLink).toBeDefined()
		expect(legsLink).toBeDefined()
		expect(customsEntriesLink).toBeDefined()
		expect(commercialInvoicesLink).toBeDefined()
		expect(documentsLink).toBeDefined()
	})
	it('should transform an API object response', () => {
		const maybeShipment = transformResponse<Shipment>()(shipmentJSON)
		expect(isRight(maybeShipment)).toBeTruthy()
		const shipment = (maybeShipment as Right<Shipment>).right
		expect(shipment._object).toEqual(SHIPMENT_TYPE)
		expect(shipment.actual_delivered_in_full_date).toBeInstanceOf(Date)
		const bookingLink = shipment.booking
		const legsLink = shipment.legs
		const customsEntriesLink = shipment.customs_entries
		const commercialInvoicesLink = shipment.commercial_invoices
		const documentsLink = shipment.documents
		expect(bookingLink).toBeDefined()
		expect(legsLink).toBeDefined()
		expect(customsEntriesLink).toBeDefined()
		expect(commercialInvoicesLink).toBeDefined()
		expect(documentsLink).toBeDefined()
	})
	it('should transform a shipment legs API page response', () => {
		const maybeShipmentLegs = transformPaginatedResponse<ShipmentLeg>()(
			shipmentLegsPageJSON,
		)
		expect(isRight(maybeShipmentLegs)).toBeTruthy()
		const shipmentLegs = (maybeShipmentLegs as Right<Page<ShipmentLeg>>).right
		expect(shipmentLegs.items).toHaveLength(1)
		const leg = shipmentLegs.items[0]
		expect(leg.actual_arrival_date).toBeInstanceOf(Date)
		expect(leg.estimated_arrival_date).toBeInstanceOf(Date)
		expect(leg.actual_departure_date).toBeInstanceOf(Date)
		expect(leg.estimated_departure_date).toBeInstanceOf(Date)
		expect(leg.origin.place.address.street_address).toEqual(
			'1641 Settlers Lane',
		)
		expect(leg.origin.tags).toContain('port_of_loading')
		expect(leg.transportation_mode).toEqual('ocean')
		expect(leg.carrier_name).toEqual('Liberty Carrier')
	})
})
