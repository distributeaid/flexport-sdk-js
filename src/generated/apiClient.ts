/**
 * Auto-generated file. Do not change.
 */
import { ClientImplementation } from '../types/Client'
import { ApiPageObject } from '../types/ApiPageObject'
import { TaskEither } from 'fp-ts/lib/TaskEither'
import { ErrorInfo } from '../types/ErrorInfo'
import { Page } from '../types/Page'
import { BookingAmendment } from './BookingAmendment'
import { liftBookingAmendment } from './BookingAmendment'
import { LiftedBookingAmendment } from './BookingAmendment'
import { toPage } from '../toPage'
import { BookingLineItem } from './BookingLineItem'
import { LiftedBookingLineItem } from './BookingLineItem'
import { liftBookingLineItem } from './BookingLineItem'
import { Booking } from './Booking'
import { LiftedBooking } from './Booking'
import { liftBooking } from './Booking'
import { CommercialInvoice } from './CommercialInvoice'
import { LiftedCommercialInvoice } from './CommercialInvoice'
import { liftCommercialInvoice } from './CommercialInvoice'
import { CustomsEntry } from './CustomsEntry'
import { LiftedCustomsEntry } from './CustomsEntry'
import { liftCustomsEntry } from './CustomsEntry'
import { Document } from './Document'
import { LiftedDocument } from './Document'
import { liftDocument } from './Document'
import { WebhookEvent } from './WebhookEvent'
import { LiftedWebhookEvent } from './WebhookEvent'
import { liftWebhookEvent } from './WebhookEvent'
import { Invoice } from './Invoice'
import { LiftedInvoice } from './Invoice'
import { liftInvoice } from './Invoice'
import { Company } from './Company'
import { LiftedCompany } from './Company'
import { liftCompany } from './Company'
import { CompanyEntity } from './CompanyEntity'
import { LiftedCompanyEntity } from './CompanyEntity'
import { liftCompanyEntity } from './CompanyEntity'
import { Contact } from './Contact'
import { LiftedContact } from './Contact'
import { liftContact } from './Contact'
import { Location } from './Location'
import { LiftedLocation } from './Location'
import { liftLocation } from './Location'
import { OceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { LiftedOceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { liftOceanShipmentContainerLeg } from './OceanShipmentContainerLeg'
import { ShipmentContainer } from './ShipmentContainer'
import { LiftedShipmentContainer } from './ShipmentContainer'
import { liftShipmentContainer } from './ShipmentContainer'
import { Address } from './Address'
import { LiftedAddress } from './Address'
import { liftAddress } from './Address'
import { Product } from './Product'
import { LiftedProduct } from './Product'
import { liftProduct } from './Product'
import { PurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { LiftedPurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { liftPurchaseOrderLineItem } from './PurchaseOrderLineItem'
import { PurchaseOrder } from './PurchaseOrder'
import { LiftedPurchaseOrder } from './PurchaseOrder'
import { liftPurchaseOrder } from './PurchaseOrder'
import { ShipmentLeg } from './ShipmentLeg'
import { LiftedShipmentLeg } from './ShipmentLeg'
import { liftShipmentLeg } from './ShipmentLeg'
import { Shipment } from './Shipment'
import { LiftedShipment } from './Shipment'
import { liftShipment } from './Shipment'
import { pipe } from 'fp-ts/lib/pipeable'
import { map } from 'fp-ts/lib/TaskEither'
import { TransportationMode } from './TransportationMode'
import { ShipmentStatus } from './ShipmentStatus'
export enum BookingLineItemIndexSortTypes {
	CARGO_READY_DATE = 'cargo_ready_date',
	CREATED_AT = 'created_at',
}
export enum BookingLineItemIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
export enum BookingsIndexSortTypes {
	CARGO_READY_DATE = 'cargo_ready_date',
	CREATED_AT = 'created_at',
}
export enum BookingsIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
export enum BookingsIndexStatusTypes {
	BOOKED = 'booked',
	SUBMITTED = 'submitted',
}
export enum InvoiceIndexSortTypes {
	DUE_DATE = 'due_date',
}
export enum InvoiceIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
export enum InvoiceIndexStatusTypes {
	OUTSTANDING = 'outstanding',
	PAST_DUE = 'past_due',
	VOID = 'void',
	PAID = 'paid',
}
export enum PortsIndexPortTypeTypes {
	AIRPORT = 'airport',
	RAILPORT = 'railport',
	ROADPORT = 'roadport',
	SEAPORT = 'seaport',
}
export enum PurchaseOrderLineItemIndexSortTypes {
	CARGO_READY_DATE = 'cargo_ready_date',
	CREATED_AT = 'created_at',
}
export enum PurchaseOrderLineItemIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
export enum PurchaseOrderIndexSortTypes {
	ID = 'id',
}
export enum PurchaseOrderIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
export enum PurchaseOrderIndexStatusTypes {
	OPEN = 'open',
	CLOSED = 'closed',
	CANCELLED = 'cancelled',
}
export enum PurchaseOrderIndexRoleTypes {
	BUYER = 'buyer',
	SELLER = 'seller',
}
export enum ShipmentIndexSortTypes {
	ID = 'id',
	TRANSPORTATION_MODE = 'transportation_mode',
	STATUS = 'status',
	UPDATED_AT = 'updated_at',
}
export enum ShipmentIndexDirectionTypes {
	ASC = 'asc',
	DESC = 'desc',
}
/**
 * Generated API client for the Flexport v2 API
 *
 * This client is auto-generated from the OpenAPI documentation published by Flexport, with some corrections.
 *
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type FlexportApiV2ClientInstance = {
	/**
	 * Create and return a booking amendment - a request to change an existing booking.
	 *
	 * Returns:
	 * - for status code 200: The created booking amendment
	 * FIXME: Implement request body handling
	 */
	booking_amendment_create: () => TaskEither<ErrorInfo, LiftedBookingAmendment>
	/**
	 * List all booking line items
	 *
	 * Returns a list of booking line items
	 *
	 * Returns:
	 * - for status code 200: collection of booking line items
	 */
	booking_line_item_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: BookingLineItemIndexSortTypes
		['direction']?: BookingLineItemIndexDirectionTypes
		['f.purchase_order.id']?: number
	}) => TaskEither<ErrorInfo, Page<LiftedBookingLineItem>>
	/**
	 * Create a booking line item
	 *
	 * Creates and returns a booking line item
	 *
	 * Returns:
	 * - for status code 200: The created booking line item
	 * FIXME: Implement request body handling
	 */
	booking_line_item_create: () => TaskEither<ErrorInfo, LiftedBookingLineItem>
	/**
	 * Retrieves the details of a single booking line item.
	 *
	 * Returns a list of booking line items
	 *
	 * Returns:
	 * - for status code 200: A collection of booking line items
	 */
	booking_line_item_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedBookingLineItem>
	/**
	 * List all bookings
	 *
	 * Returns a list of bookings.
	 *
	 * Returns:
	 * - for status code 200: collection of bookings
	 */
	bookings_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: BookingsIndexSortTypes
		['direction']?: BookingsIndexDirectionTypes
		['f.status']?: BookingsIndexStatusTypes
		['f.shipment.id']?: number
		['f.consignee_entity_ref']?: string
		['f.shipper_entity_ref']?: string
		['f.cargo_ready_date']?: string
		['f.cargo_ready_date.gt']?: string
		['f.cargo_ready_date.gte']?: string
		['f.cargo_ready_date.lt']?: string
		['f.cargo_ready_date.lte']?: string
		['f.created_at']?: string
		['f.created_at.gt']?: string
		['f.created_at.gte']?: string
		['f.created_at.lt']?: string
		['f.created_at.lte']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedBooking>>
	/**
	 * Create and return a booking
	 *
	 * Returns:
	 * - for status code 200: The created booking
	 * FIXME: Implement request body handling
	 */
	booking_create: () => TaskEither<ErrorInfo, LiftedBooking>
	/**
	 * Retrieve a booking
	 *
	 * Retrieves the details of a single booking.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	booking_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedBooking>
	/**
	 * List commercial invoices
	 *
	 * Returns a list of commercial invoices.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	commercial_invoices_index: (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
		['f.invoice_number']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedCommercialInvoice>>
	/**
	 * Create and return a new commercial invoice. Special permissions are required to use this endpoint, please contact your integration team for more details.
	 *
	 * Returns:
	 * - for status code 200: The created company entity
	 * FIXME: Implement request body handling
	 */
	commercial_invoices_create: () => TaskEither<
		ErrorInfo,
		LiftedCommercialInvoice
	>
	/**
	 * Retrieve a commercial invoice
	 *
	 * Retrieves the details of a single commercial invoice.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	commercial_invoices_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCommercialInvoice>
	/**
	 * List customs entry objects
	 *
	 * Returns a list of customs entries.
	 *
	 * Returns:
	 * - for status code 200: collection of customs entries
	 */
	customs_entry_index: (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedCustomsEntry>>
	/**
	 * Retrieve a customs entry
	 *
	 * Retrieves the details of a single customs entry.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	customs_entries_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCustomsEntry>
	/**
	 * List document objects
	 *
	 * Returns a list of all documents associated with shipments.
	 *
	 * Returns:
	 * - for status code 200: collection of documents
	 */
	documents_index: (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
		['f.document_type']?: string
		['f.archived_at.exists']?: string
		['f.uploaded_at.gt']?: string
		['f.uploaded_at.lt']?: string
		['f.uploaded_at.gte']?: string
		['f.uploaded_at.lte']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedDocument>>
	/**
	 * Retrieve a document
	 *
	 * Retrieves the details of a single document.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	documents_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedDocument>
	/**
	 * Download a document
	 *
	 * Retrieves the contents of a specified file. Returns the file as a stream of bytes.
	 *
	 * Returns:
	 * - for status code 200: Success
	 * FIXME: Only the first response type is handled
	 */
	documents_download: (params: { ['id']: number }) => TaskEither<ErrorInfo, any>
	/**
	 * List all webhook events
	 *
	 * Returns a list of all events delivered to any webhook registered by this client
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	events_index: (params?: {
		['f.occurred_at.gte']?: string
		['f.occurred_at.lte']?: string
		['f.data.shipment.id']?: number
		['f.data.resource._object']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedWebhookEvent>>
	/**
	 * Retrieve a single webhook event
	 *
	 * Returns the webhook event with ID ":id"
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	events_show: () => TaskEither<ErrorInfo, LiftedWebhookEvent>
	/**
	 * List all invoices
	 *
	 * Returns a list of invoices.
	 *
	 * Returns:
	 * - for status code 200: collection of invoices
	 */
	invoice_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: InvoiceIndexSortTypes
		['direction']?: InvoiceIndexDirectionTypes
		['f.status']?: InvoiceIndexStatusTypes
		['f.shipment.id']?: number
		['f.billed_directly_to_client']?: boolean
		['f.entity.id']?: number
		['f.entity.ref']?: string
		['f.name']?: string
		['f.issued_at.gt']?: string
		['f.issued_at.lt']?: string
		['f.client_id']?: number
		['f.shipment_id']?: number
	}) => TaskEither<ErrorInfo, Page<LiftedInvoice>>
	/**
	 * Retrieve an invoice
	 *
	 * Retrieves the details of a single invoice
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	invoices_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedInvoice>
	/**
	 * List company objects
	 *
	 * Returns a list of companies in the network.
	 *
	 * Returns:
	 * - for status code 200: collection of companies
	 */
	network_company_index: (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedCompany>>
	/**
	 * Create a new company object
	 *
	 * Returns:
	 * - for status code 200: The created company
	 * FIXME: Implement request body handling
	 */
	network_company_create: () => TaskEither<ErrorInfo, LiftedCompany>
	/**
	 * Retrieve a company
	 *
	 * Retrieves the details of a single company.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	network_company_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCompany>
	/**
	 * Update an existing company
	 *
	 * Returns:
	 * - for status code 200: The updated company
	 * FIXME: Implement request body handling
	 */
	network_company_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCompany>
	/**
	 * List of company entity objects
	 *
	 * Returns a list of the company entity objects in the network.
	 *
	 * Returns:
	 * - for status code 200: collection of company entities
	 */
	company_entity_index: (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_id']?: string
		['f.company_ref']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedCompanyEntity>>
	/**
	 * Create and return a new company entity
	 *
	 * Returns:
	 * - for status code 200: The created company entity
	 * FIXME: Implement request body handling
	 */
	network_company_entity_create: () => TaskEither<
		ErrorInfo,
		LiftedCompanyEntity
	>
	/**
	 * Retrieve a company entity
	 *
	 * Retrieves the details of a single company entity
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	network_company_entity_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCompanyEntity>
	/**
	 * Update a company entity
	 *
	 * Returns:
	 * - for status code 200: Success
	 * FIXME: Implement request body handling
	 */
	network_company_entity_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedCompanyEntity>
	/**
	 * List contact objects
	 *
	 * Returns a list of contacts in the network.
	 *
	 * Returns:
	 * - for status code 200: collection of contacts
	 */
	network_contact_index: (params?: {
		['page']?: number
		['per']?: number
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.location.id']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedContact>>
	/**
	 * Create a new contact object
	 *
	 * Returns:
	 * - for status code 200: The created contact
	 * FIXME: Implement request body handling
	 */
	network_contact_create: () => TaskEither<ErrorInfo, LiftedContact>
	/**
	 * Retrieve a contact
	 *
	 * Retrieves the details of a single contact.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	network_contact_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedContact>
	/**
	 * Update an existing contact
	 *
	 * Returns:
	 * - for status code 200: The updated contact
	 * FIXME: Implement request body handling
	 */
	network_contact_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedContact>
	/**
	 * List of location objects
	 *
	 * Returns a list of location objects in the network.
	 *
	 * Returns:
	 * - for status code 200: collection of locations
	 */
	location_index: (params?: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.contact.id']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedLocation>>
	/**
	 * Create and return a new location
	 *
	 * Returns:
	 * - for status code 200: The created location
	 * FIXME: Implement request body handling
	 */
	network_location_create: () => TaskEither<ErrorInfo, LiftedLocation>
	/**
	 * Retrieve a location by id
	 *
	 * Retrieves the details of a single location
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	network_location_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedLocation>
	/**
	 * Update a network location
	 *
	 * Returns:
	 * - for status code 200: Success
	 * FIXME: Implement request body handling
	 */
	location_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedLocation>
	/**
	 * Retrieve your company
	 *
	 * Retrieves the details of your own organization.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	network_company_me: () => TaskEither<ErrorInfo, LiftedCompany>
	/**
	 * List all containers.
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	ocean_shipment_legs_index: (params?: {
		['page']?: number
		['per']?: number
		['f.leg.id']?: number
		['f.shipment_container.id']?: number
		['f.shipment_container.container_number']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedOceanShipmentContainerLeg>>
	/**
	 * Retrieve a shipment leg
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	ocean_shipment_legs_show: () => TaskEither<
		ErrorInfo,
		LiftedOceanShipmentContainerLeg
	>
	/**
	 * List all containers.
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	container_list: (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.container_number']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedShipmentContainer>>
	/**
	 * Retrieve a container.
	 *
	 * Retrieves the details of a single container.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	container_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedShipmentContainer>
	/**
	 * List of ports
	 *
	 * Returns:
	 * - for status code 200: collection of ports
	 */
	ports_index: (params?: {
		['page']?: number
		['per']?: number
		['f.port_type']?: PortsIndexPortTypeTypes
		['f.unlocode']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedAddress>>
	/**
	 * List all products for a client
	 *
	 * Returns a list of all products belonging to this client
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	product_index: (params?: {
		['f.sku']?: string
		['f.archived_at.exists']?: boolean
		['f.product_properties.TYPE']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedProduct>>
	/**
	 * Create a product
	 *
	 * Create a new product for this client using the request payload
	 *
	 * Returns:
	 * - for status code 200: Created
	 * FIXME: Implement request body handling
	 */
	product_create: () => TaskEither<ErrorInfo, LiftedProduct>
	/**
	 * Retrieve a single product
	 *
	 * Returns the client's product with this ID
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	product_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedProduct>
	/**
	 * Update a product
	 *
	 * Update this product to represent the request payload
	 *
	 * Returns:
	 * - for status code 200: Updated
	 * FIXME: Implement request body handling
	 */
	product_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedProduct>
	/**
	 * List all purchase order line items
	 *
	 * Returns a list of purchase order line items
	 *
	 * Returns:
	 * - for status code 200: collection of purchase order line items
	 */
	purchase_order_line_item_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: PurchaseOrderLineItemIndexSortTypes
		['direction']?: PurchaseOrderLineItemIndexDirectionTypes
		['f.purchase_order.id']?: number
		['f.line_item_number']?: string
		['f.item_key']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedPurchaseOrderLineItem>>
	/**
	 * Retrieve a purchase order line item
	 *
	 * Returns the details of a purchase order line item
	 *
	 * Returns:
	 * - for status code 200: collection of purchase order line items
	 */
	purchase_order_line_item_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedPurchaseOrderLineItem>
	/**
	 * List all purchase orders
	 *
	 * Returns a list of purchase orders
	 *
	 * Returns:
	 * - for status code 200: collection of purchase orders
	 */
	purchase_order_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: PurchaseOrderIndexSortTypes
		['direction']?: PurchaseOrderIndexDirectionTypes
		['f.archived_at.exists']?: boolean
		['f.status']?: PurchaseOrderIndexStatusTypes
		['f.buyer_ref']?: string
		['f.seller_ref']?: string
		['f.role']?: PurchaseOrderIndexRoleTypes
		['f.shipment.id']?: number
		['f.name']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedPurchaseOrder>>
	/**
	 * Retrieve a purchase order
	 *
	 * Retrieves the details of a single purchase order.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	purchase_order_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedPurchaseOrder>
	/**
	 * List all shipment route legs
	 *
	 * Returns a list of shipment route legs. The legs are sorted descending by creation date.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	shipment_leg_index: (params?: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.transportation_mode']?: number
	}) => TaskEither<ErrorInfo, Page<LiftedShipmentLeg>>
	/**
	 * Retrieve a shipment route leg
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	shipment_leg_show: () => TaskEither<ErrorInfo, LiftedShipmentLeg>
	/**
	 * List all shipments
	 *
	 * Returns a list of shipments.
	 *
	 * Returns:
	 * - for status code 200: collection of shipments
	 */
	shipment_index: (params?: {
		['page']?: number
		['per']?: number
		['sort']?: ShipmentIndexSortTypes
		['direction']?: ShipmentIndexDirectionTypes
		['f.transportation_mode']?: TransportationMode
		['f.status']?: ShipmentStatus
		['f.statuses.any']?: ShipmentStatus
		['f.container_number']?: string
		['f.purchase_order']?: string
		['f.sku']?: string
		['f.updated_at.gt']?: string
		['f.updated_at.lt']?: string
		['f.master_bill_number']?: string
		['f.house_bill_number']?: string
		['f.consignee_external_ref']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) => TaskEither<ErrorInfo, Page<LiftedShipment>>
	/**
	 * Retrieve a shipment
	 *
	 * Retrieves the details of a single shipment.
	 *
	 * Returns:
	 * - for status code 200: Success
	 */
	shipment_show: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedShipment>
	/**
	 * Update an existing shipment
	 *
	 * Returns:
	 * - for status code 200: The updated shipment
	 * FIXME: Implement request body handling
	 */
	shipment_update: (params: {
		['id']: number
	}) => TaskEither<ErrorInfo, LiftedShipment>
}
export const flexportApiV2 = (
	apiClient: ClientImplementation,
): FlexportApiV2ClientInstance => {
	return {
		booking_amendment_create: () =>
			pipe(
				apiClient<BookingAmendment>({
					method: 'POST',
					path: '/booking_amendments',
				}),
				map(liftBookingAmendment),
			),
		booking_line_item_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: BookingLineItemIndexSortTypes
			['direction']?: BookingLineItemIndexDirectionTypes
			['f.purchase_order.id']?: number
		}) =>
			pipe(
				apiClient<ApiPageObject<BookingLineItem>>({
					method: 'GET',
					path: '/booking_line_items',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.purchase_order.id']: params?.['f.purchase_order.id'],
						},
					},
				}),
				map(
					toPage<BookingLineItem, LiftedBookingLineItem>(liftBookingLineItem),
				),
			),
		booking_line_item_create: () =>
			pipe(
				apiClient<BookingLineItem>({
					method: 'POST',
					path: '/booking_line_items',
				}),
				map(liftBookingLineItem),
			),
		booking_line_item_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<BookingLineItem>({
					method: 'GET',
					path: '/booking_line_items/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftBookingLineItem),
			),
		bookings_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: BookingsIndexSortTypes
			['direction']?: BookingsIndexDirectionTypes
			['f.status']?: BookingsIndexStatusTypes
			['f.shipment.id']?: number
			['f.consignee_entity_ref']?: string
			['f.shipper_entity_ref']?: string
			['f.cargo_ready_date']?: string
			['f.cargo_ready_date.gt']?: string
			['f.cargo_ready_date.gte']?: string
			['f.cargo_ready_date.lt']?: string
			['f.cargo_ready_date.lte']?: string
			['f.created_at']?: string
			['f.created_at.gt']?: string
			['f.created_at.gte']?: string
			['f.created_at.lt']?: string
			['f.created_at.lte']?: string
			['f.metadata.YOUR_METADATA_KEY']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Booking>>({
					method: 'GET',
					path: '/bookings',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.status']: params?.['f.status'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.consignee_entity_ref']: params?.['f.consignee_entity_ref'],
							['f.shipper_entity_ref']: params?.['f.shipper_entity_ref'],
							['f.cargo_ready_date']: params?.['f.cargo_ready_date'],
							['f.cargo_ready_date.gt']: params?.['f.cargo_ready_date.gt'],
							['f.cargo_ready_date.gte']: params?.['f.cargo_ready_date.gte'],
							['f.cargo_ready_date.lt']: params?.['f.cargo_ready_date.lt'],
							['f.cargo_ready_date.lte']: params?.['f.cargo_ready_date.lte'],
							['f.created_at']: params?.['f.created_at'],
							['f.created_at.gt']: params?.['f.created_at.gt'],
							['f.created_at.gte']: params?.['f.created_at.gte'],
							['f.created_at.lt']: params?.['f.created_at.lt'],
							['f.created_at.lte']: params?.['f.created_at.lte'],
							['f.metadata.YOUR_METADATA_KEY']:
								params?.['f.metadata.YOUR_METADATA_KEY'],
						},
					},
				}),
				map(toPage<Booking, LiftedBooking>(liftBooking)),
			),
		booking_create: () =>
			pipe(
				apiClient<Booking>({ method: 'POST', path: '/bookings' }),
				map(liftBooking),
			),
		booking_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Booking>({
					method: 'GET',
					path: '/bookings/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftBooking),
			),
		commercial_invoices_index: (params?: {
			['page']?: number
			['per']?: number
			['f.shipment.id']?: string
			['f.invoice_number']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<CommercialInvoice>>({
					method: 'GET',
					path: '/commercial_invoices',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.invoice_number']: params?.['f.invoice_number'],
						},
					},
				}),
				map(
					toPage<CommercialInvoice, LiftedCommercialInvoice>(
						liftCommercialInvoice,
					),
				),
			),
		commercial_invoices_create: () =>
			pipe(
				apiClient<CommercialInvoice>({
					method: 'POST',
					path: '/commercial_invoices',
				}),
				map(liftCommercialInvoice),
			),
		commercial_invoices_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<CommercialInvoice>({
					method: 'GET',
					path: '/commercial_invoices/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCommercialInvoice),
			),
		customs_entry_index: (params?: {
			['page']?: number
			['per']?: number
			['f.shipment.id']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<CustomsEntry>>({
					method: 'GET',
					path: '/customs_entries',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.shipment.id']: params?.['f.shipment.id'],
						},
					},
				}),
				map(toPage<CustomsEntry, LiftedCustomsEntry>(liftCustomsEntry)),
			),
		customs_entries_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<CustomsEntry>({
					method: 'GET',
					path: '/customs_entries/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCustomsEntry),
			),
		documents_index: (params?: {
			['page']?: number
			['per']?: number
			['f.shipment.id']?: string
			['f.document_type']?: string
			['f.archived_at.exists']?: string
			['f.uploaded_at.gt']?: string
			['f.uploaded_at.lt']?: string
			['f.uploaded_at.gte']?: string
			['f.uploaded_at.lte']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Document>>({
					method: 'GET',
					path: '/documents',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.document_type']: params?.['f.document_type'],
							['f.archived_at.exists']: params?.['f.archived_at.exists'],
							['f.uploaded_at.gt']: params?.['f.uploaded_at.gt'],
							['f.uploaded_at.lt']: params?.['f.uploaded_at.lt'],
							['f.uploaded_at.gte']: params?.['f.uploaded_at.gte'],
							['f.uploaded_at.lte']: params?.['f.uploaded_at.lte'],
						},
					},
				}),
				map(toPage<Document, LiftedDocument>(liftDocument)),
			),
		documents_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Document>({
					method: 'GET',
					path: '/documents/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftDocument),
			),
		documents_download: (params: { ['id']: number }) =>
			pipe(
				apiClient<
					| string
					| string
					| string
					| string
					| string
					| string
					| string
					| string
					| string
					| string
					| string
					| string
				>({
					method: 'GET',
					path: '/documents/{id}/download',
					params: { path: { ['id']: params['id'] } },
				}),
				map((res) => {
					return res
				}),
			),
		events_index: (params?: {
			['f.occurred_at.gte']?: string
			['f.occurred_at.lte']?: string
			['f.data.shipment.id']?: number
			['f.data.resource._object']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<WebhookEvent>>({
					method: 'GET',
					path: '/events',
					params: {
						query: {
							['f.occurred_at.gte']: params?.['f.occurred_at.gte'],
							['f.occurred_at.lte']: params?.['f.occurred_at.lte'],
							['f.data.shipment.id']: params?.['f.data.shipment.id'],
							['f.data.resource._object']: params?.['f.data.resource._object'],
						},
					},
				}),
				map(toPage<WebhookEvent, LiftedWebhookEvent>(liftWebhookEvent)),
			),
		events_show: () =>
			pipe(
				apiClient<WebhookEvent>({ method: 'GET', path: '/events/:id' }),
				map(liftWebhookEvent),
			),
		invoice_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: InvoiceIndexSortTypes
			['direction']?: InvoiceIndexDirectionTypes
			['f.status']?: InvoiceIndexStatusTypes
			['f.shipment.id']?: number
			['f.billed_directly_to_client']?: boolean
			['f.entity.id']?: number
			['f.entity.ref']?: string
			['f.name']?: string
			['f.issued_at.gt']?: string
			['f.issued_at.lt']?: string
			['f.client_id']?: number
			['f.shipment_id']?: number
		}) =>
			pipe(
				apiClient<ApiPageObject<Invoice>>({
					method: 'GET',
					path: '/invoices',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.status']: params?.['f.status'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.billed_directly_to_client']:
								params?.['f.billed_directly_to_client'],
							['f.entity.id']: params?.['f.entity.id'],
							['f.entity.ref']: params?.['f.entity.ref'],
							['f.name']: params?.['f.name'],
							['f.issued_at.gt']: params?.['f.issued_at.gt'],
							['f.issued_at.lt']: params?.['f.issued_at.lt'],
							['f.client_id']: params?.['f.client_id'],
							['f.shipment_id']: params?.['f.shipment_id'],
						},
					},
				}),
				map(toPage<Invoice, LiftedInvoice>(liftInvoice)),
			),
		invoices_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Invoice>({
					method: 'GET',
					path: '/invoices/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftInvoice),
			),
		network_company_index: (params?: {
			['page']?: number
			['per']?: number
			['f.ref']?: string
			['f.metadata.YOUR_METADATA_KEY']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Company>>({
					method: 'GET',
					path: '/network/companies',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.ref']: params?.['f.ref'],
							['f.metadata.YOUR_METADATA_KEY']:
								params?.['f.metadata.YOUR_METADATA_KEY'],
						},
					},
				}),
				map(toPage<Company, LiftedCompany>(liftCompany)),
			),
		network_company_create: () =>
			pipe(
				apiClient<Company>({ method: 'POST', path: '/network/companies' }),
				map(liftCompany),
			),
		network_company_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Company>({
					method: 'GET',
					path: '/network/companies/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCompany),
			),
		network_company_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<Company>({
					method: 'PATCH',
					path: '/network/companies/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCompany),
			),
		company_entity_index: (params?: {
			['page']?: number
			['per']?: number
			['f.ref']?: string
			['f.company_id']?: string
			['f.company_ref']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<CompanyEntity>>({
					method: 'GET',
					path: '/network/company_entities',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.ref']: params?.['f.ref'],
							['f.company_id']: params?.['f.company_id'],
							['f.company_ref']: params?.['f.company_ref'],
						},
					},
				}),
				map(toPage<CompanyEntity, LiftedCompanyEntity>(liftCompanyEntity)),
			),
		network_company_entity_create: () =>
			pipe(
				apiClient<CompanyEntity>({
					method: 'POST',
					path: '/network/company_entities',
				}),
				map(liftCompanyEntity),
			),
		network_company_entity_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<CompanyEntity>({
					method: 'GET',
					path: '/network/company_entities/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCompanyEntity),
			),
		network_company_entity_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<CompanyEntity>({
					method: 'PATCH',
					path: '/network/company_entities/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftCompanyEntity),
			),
		network_contact_index: (params?: {
			['page']?: number
			['per']?: number
			['f.company_ref']?: string
			['f.company.id']?: string
			['f.location.id']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Contact>>({
					method: 'GET',
					path: '/network/contacts',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.company_ref']: params?.['f.company_ref'],
							['f.company.id']: params?.['f.company.id'],
							['f.location.id']: params?.['f.location.id'],
						},
					},
				}),
				map(toPage<Contact, LiftedContact>(liftContact)),
			),
		network_contact_create: () =>
			pipe(
				apiClient<Contact>({ method: 'POST', path: '/network/contacts' }),
				map(liftContact),
			),
		network_contact_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Contact>({
					method: 'GET',
					path: '/network/contacts/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftContact),
			),
		network_contact_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<Contact>({
					method: 'PATCH',
					path: '/network/contacts/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftContact),
			),
		location_index: (params?: {
			['page']?: number
			['per']?: number
			['f.ref']?: string
			['f.company_ref']?: string
			['f.company.id']?: string
			['f.contact.id']?: string
			['f.metadata.YOUR_METADATA_KEY']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Location>>({
					method: 'GET',
					path: '/network/locations',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.ref']: params?.['f.ref'],
							['f.company_ref']: params?.['f.company_ref'],
							['f.company.id']: params?.['f.company.id'],
							['f.contact.id']: params?.['f.contact.id'],
							['f.metadata.YOUR_METADATA_KEY']:
								params?.['f.metadata.YOUR_METADATA_KEY'],
						},
					},
				}),
				map(toPage<Location, LiftedLocation>(liftLocation)),
			),
		network_location_create: () =>
			pipe(
				apiClient<Location>({ method: 'POST', path: '/network/locations' }),
				map(liftLocation),
			),
		network_location_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Location>({
					method: 'GET',
					path: '/network/locations/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftLocation),
			),
		location_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<Location>({
					method: 'PATCH',
					path: '/network/locations/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftLocation),
			),
		network_company_me: () =>
			pipe(
				apiClient<Company>({ method: 'GET', path: '/network/me/companies' }),
				map(liftCompany),
			),
		ocean_shipment_legs_index: (params?: {
			['page']?: number
			['per']?: number
			['f.leg.id']?: number
			['f.shipment_container.id']?: number
			['f.shipment_container.container_number']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<OceanShipmentContainerLeg>>({
					method: 'GET',
					path: '/ocean/shipment_container_legs',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.leg.id']: params?.['f.leg.id'],
							['f.shipment_container.id']: params?.['f.shipment_container.id'],
							['f.shipment_container.container_number']:
								params?.['f.shipment_container.container_number'],
						},
					},
				}),
				map(
					toPage<OceanShipmentContainerLeg, LiftedOceanShipmentContainerLeg>(
						liftOceanShipmentContainerLeg,
					),
				),
			),
		ocean_shipment_legs_show: () =>
			pipe(
				apiClient<OceanShipmentContainerLeg>({
					method: 'GET',
					path: '/ocean/shipment_container_legs/:id',
				}),
				map(liftOceanShipmentContainerLeg),
			),
		container_list: (params?: {
			['page']?: number
			['per']?: number
			['f.shipment.id']?: number
			['f.container_number']?: string
			['f.metadata.YOUR_METADATA_KEY']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<ShipmentContainer>>({
					method: 'GET',
					path: '/ocean/shipment_containers',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.container_number']: params?.['f.container_number'],
							['f.metadata.YOUR_METADATA_KEY']:
								params?.['f.metadata.YOUR_METADATA_KEY'],
						},
					},
				}),
				map(
					toPage<ShipmentContainer, LiftedShipmentContainer>(
						liftShipmentContainer,
					),
				),
			),
		container_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<ShipmentContainer>({
					method: 'GET',
					path: '/ocean/shipment_containers/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftShipmentContainer),
			),
		ports_index: (params?: {
			['page']?: number
			['per']?: number
			['f.port_type']?: PortsIndexPortTypeTypes
			['f.unlocode']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Address>>({
					method: 'GET',
					path: '/ports',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.port_type']: params?.['f.port_type'],
							['f.unlocode']: params?.['f.unlocode'],
						},
					},
				}),
				map(toPage<Address, LiftedAddress>(liftAddress)),
			),
		product_index: (params?: {
			['f.sku']?: string
			['f.archived_at.exists']?: boolean
			['f.product_properties.TYPE']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Product>>({
					method: 'GET',
					path: '/products',
					params: {
						query: {
							['f.sku']: params?.['f.sku'],
							['f.archived_at.exists']: params?.['f.archived_at.exists'],
							['f.product_properties.TYPE']:
								params?.['f.product_properties.TYPE'],
						},
					},
				}),
				map(toPage<Product, LiftedProduct>(liftProduct)),
			),
		product_create: () =>
			pipe(
				apiClient<Product>({ method: 'POST', path: '/products' }),
				map(liftProduct),
			),
		product_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Product>({
					method: 'GET',
					path: '/products/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftProduct),
			),
		product_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<Product>({
					method: 'PATCH',
					path: '/products/{id}',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftProduct),
			),
		purchase_order_line_item_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: PurchaseOrderLineItemIndexSortTypes
			['direction']?: PurchaseOrderLineItemIndexDirectionTypes
			['f.purchase_order.id']?: number
			['f.line_item_number']?: string
			['f.item_key']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<PurchaseOrderLineItem>>({
					method: 'GET',
					path: '/purchase_order_line_items',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.purchase_order.id']: params?.['f.purchase_order.id'],
							['f.line_item_number']: params?.['f.line_item_number'],
							['f.item_key']: params?.['f.item_key'],
						},
					},
				}),
				map(
					toPage<PurchaseOrderLineItem, LiftedPurchaseOrderLineItem>(
						liftPurchaseOrderLineItem,
					),
				),
			),
		purchase_order_line_item_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<PurchaseOrderLineItem>({
					method: 'GET',
					path: '/purchase_order_line_items/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftPurchaseOrderLineItem),
			),
		purchase_order_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: PurchaseOrderIndexSortTypes
			['direction']?: PurchaseOrderIndexDirectionTypes
			['f.archived_at.exists']?: boolean
			['f.status']?: PurchaseOrderIndexStatusTypes
			['f.buyer_ref']?: string
			['f.seller_ref']?: string
			['f.role']?: PurchaseOrderIndexRoleTypes
			['f.shipment.id']?: number
			['f.name']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<PurchaseOrder>>({
					method: 'GET',
					path: '/purchase_orders',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.archived_at.exists']: params?.['f.archived_at.exists'],
							['f.status']: params?.['f.status'],
							['f.buyer_ref']: params?.['f.buyer_ref'],
							['f.seller_ref']: params?.['f.seller_ref'],
							['f.role']: params?.['f.role'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.name']: params?.['f.name'],
						},
					},
				}),
				map(toPage<PurchaseOrder, LiftedPurchaseOrder>(liftPurchaseOrder)),
			),
		purchase_order_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<PurchaseOrder>({
					method: 'GET',
					path: '/purchase_orders/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftPurchaseOrder),
			),
		shipment_leg_index: (params?: {
			['page']?: number
			['per']?: number
			['f.shipment.id']?: number
			['f.transportation_mode']?: number
		}) =>
			pipe(
				apiClient<ApiPageObject<ShipmentLeg>>({
					method: 'GET',
					path: '/shipment_legs',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['f.shipment.id']: params?.['f.shipment.id'],
							['f.transportation_mode']: params?.['f.transportation_mode'],
						},
					},
				}),
				map(toPage<ShipmentLeg, LiftedShipmentLeg>(liftShipmentLeg)),
			),
		shipment_leg_show: () =>
			pipe(
				apiClient<ShipmentLeg>({ method: 'GET', path: '/shipment_legs/:id' }),
				map(liftShipmentLeg),
			),
		shipment_index: (params?: {
			['page']?: number
			['per']?: number
			['sort']?: ShipmentIndexSortTypes
			['direction']?: ShipmentIndexDirectionTypes
			['f.transportation_mode']?: TransportationMode
			['f.status']?: ShipmentStatus
			['f.statuses.any']?: ShipmentStatus
			['f.container_number']?: string
			['f.purchase_order']?: string
			['f.sku']?: string
			['f.updated_at.gt']?: string
			['f.updated_at.lt']?: string
			['f.master_bill_number']?: string
			['f.house_bill_number']?: string
			['f.consignee_external_ref']?: string
			['f.metadata.YOUR_METADATA_KEY']?: string
		}) =>
			pipe(
				apiClient<ApiPageObject<Shipment>>({
					method: 'GET',
					path: '/shipments',
					params: {
						query: {
							['page']: params?.['page'],
							['per']: params?.['per'],
							['sort']: params?.['sort'],
							['direction']: params?.['direction'],
							['f.transportation_mode']: params?.['f.transportation_mode'],
							['f.status']: params?.['f.status'],
							['f.statuses.any']: params?.['f.statuses.any'],
							['f.container_number']: params?.['f.container_number'],
							['f.purchase_order']: params?.['f.purchase_order'],
							['f.sku']: params?.['f.sku'],
							['f.updated_at.gt']: params?.['f.updated_at.gt'],
							['f.updated_at.lt']: params?.['f.updated_at.lt'],
							['f.master_bill_number']: params?.['f.master_bill_number'],
							['f.house_bill_number']: params?.['f.house_bill_number'],
							['f.consignee_external_ref']:
								params?.['f.consignee_external_ref'],
							['f.metadata.YOUR_METADATA_KEY']:
								params?.['f.metadata.YOUR_METADATA_KEY'],
						},
					},
				}),
				map(toPage<Shipment, LiftedShipment>(liftShipment)),
			),
		shipment_show: (params: { ['id']: number }) =>
			pipe(
				apiClient<Shipment>({
					method: 'GET',
					path: '/shipments/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftShipment),
			),
		shipment_update: (params: { ['id']: number }) =>
			pipe(
				apiClient<Shipment>({
					method: 'PATCH',
					path: '/shipments/:id',
					params: { path: { ['id']: params['id'] } },
				}),
				map(liftShipment),
			),
	}
}
