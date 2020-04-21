import { FlexportApiClient } from '../FlexportApiClient'
import { TransportationMode } from './TransportationMode'
import { ShipmentStatus } from './ShipmentStatus'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export const flexportApiV2 = (apiClient: FlexportApiClient) => ({
	/**
	 * Create and return a booking amendment - a request to change an existing booking.
	 * POST /booking_amendments
	 */
	booking_amendment_create: () =>
		apiClient({ method: 'POST', path: '/booking_amendments' }),
	/**
	 * List all booking line items
	 * GET /booking_line_items
	 *
	 * Returns a list of booking line items
	 */ booking_line_item_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.purchase_order.id']?: number
	}) =>
		apiClient({
			method: 'GET',
			path: '/booking_line_items',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.purchase_order.id']: params['f.purchase_order.id'],
				},
			},
		}),
	/**
	 * Create a booking line item
	 * POST /booking_line_items
	 *
	 * Creates and returns a booking line item
	 */ booking_line_item_create: () =>
		apiClient({ method: 'POST', path: '/booking_line_items' }),
	/**
	 * Retrieves the details of a single booking line item.
	 * GET /booking_line_items/:id
	 *
	 * Returns a list of booking line items
	 */ booking_line_item_show: (params: { ['id']: number }) =>
		apiClient({
			method: 'GET',
			path: '/booking_line_items/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List all bookings
	 * GET /bookings
	 *
	 * Returns a list of bookings.
	 */ bookings_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.status']?: 'booked' | 'submitted'
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
		apiClient({
			method: 'GET',
			path: '/bookings',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.status']: params['f.status'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.consignee_entity_ref']: params['f.consignee_entity_ref'],
					['f.shipper_entity_ref']: params['f.shipper_entity_ref'],
					['f.cargo_ready_date']: params['f.cargo_ready_date'],
					['f.cargo_ready_date.gt']: params['f.cargo_ready_date.gt'],
					['f.cargo_ready_date.gte']: params['f.cargo_ready_date.gte'],
					['f.cargo_ready_date.lt']: params['f.cargo_ready_date.lt'],
					['f.cargo_ready_date.lte']: params['f.cargo_ready_date.lte'],
					['f.created_at']: params['f.created_at'],
					['f.created_at.gt']: params['f.created_at.gt'],
					['f.created_at.gte']: params['f.created_at.gte'],
					['f.created_at.lt']: params['f.created_at.lt'],
					['f.created_at.lte']: params['f.created_at.lte'],
					['f.metadata.YOUR_METADATA_KEY']:
						params['f.metadata.YOUR_METADATA_KEY'],
				},
			},
		}),
	/**
	 * Create and return a booking
	 * POST /bookings
	 */ booking_create: () => apiClient({ method: 'POST', path: '/bookings' }),
	/**
	 * Retrieve a booking
	 * GET /bookings/:id
	 *
	 * Retrieves the details of a single booking.
	 */ booking_show: (params: { ['id']: number }) =>
		apiClient({
			method: 'GET',
			path: '/bookings/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List commercial invoices
	 * GET /commercial_invoices
	 *
	 * Returns a list of commercial invoices.
	 */ commercial_invoices_index: (params: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
		['f.invoice_number']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/commercial_invoices',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.invoice_number']: params['f.invoice_number'],
				},
			},
		}),
	/**
	 * Retrieve a commercial invoice
	 * GET /commercial_invoices/:id
	 *
	 * Retrieves the details of a single commercial invoice.
	 */ commercial_invoices_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/commercial_invoices/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List customs entry objects
	 * GET /customs_entries
	 *
	 * Returns a list of customs entries.
	 */ customs_entry_index: (params: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/customs_entries',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.shipment.id']: params['f.shipment.id'],
				},
			},
		}),
	/**
	 * Retrieve a customs entry
	 * GET /customs_entries/:id
	 *
	 * Retrieves the details of a single customs entry.
	 */ customs_entries_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/customs_entries/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List document objects
	 * GET /documents
	 *
	 * Returns a list of all documents associated with shipments.
	 */ documents_index: (params: {
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
		apiClient({
			method: 'GET',
			path: '/documents',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.document_type']: params['f.document_type'],
					['f.archived_at.exists']: params['f.archived_at.exists'],
					['f.uploaded_at.gt']: params['f.uploaded_at.gt'],
					['f.uploaded_at.lt']: params['f.uploaded_at.lt'],
					['f.uploaded_at.gte']: params['f.uploaded_at.gte'],
					['f.uploaded_at.lte']: params['f.uploaded_at.lte'],
				},
			},
		}),
	/**
	 * Retrieve a document
	 * GET /documents/{id}
	 *
	 * Retrieves the details of a single document.
	 */ documents_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/documents/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Download a document
	 * GET /documents/{id}/download
	 *
	 * Retrieves the contents of a specified file. Returns the file as a stream of bytes.
	 */ documents_download: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/documents/{id}/download',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List all webhook events
	 * GET /events
	 *
	 * Returns a list of all events delivered to any webhook registered by this client
	 */ events_index: (params: {
		['f.occurred_at.gte']?: string
		['f.occurred_at.lte']?: string
		['f.data.shipment.id']?: number
		['f.data.resource._object']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/events',
			params: {
				query: {
					['f.occurred_at.gte']: params['f.occurred_at.gte'],
					['f.occurred_at.lte']: params['f.occurred_at.lte'],
					['f.data.shipment.id']: params['f.data.shipment.id'],
					['f.data.resource._object']: params['f.data.resource._object'],
				},
			},
		}),
	/**
	 * Retrieve a single webhook event
	 * GET /events/:id
	 *
	 * Returns the webhook event with ID ":id"
	 */ events_show: () => apiClient({ method: 'GET', path: '/events/:id' }),
	/**
	 * List all invoices
	 * GET /invoices
	 *
	 * Returns a list of invoices.
	 */ invoice_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'due_date'
		['direction']?: 'asc' | 'desc'
		['f.status']?: 'outstanding' | 'past_due' | 'void' | 'paid'
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
		apiClient({
			method: 'GET',
			path: '/invoices',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.status']: params['f.status'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.billed_directly_to_client']:
						params['f.billed_directly_to_client'],
					['f.entity.id']: params['f.entity.id'],
					['f.entity.ref']: params['f.entity.ref'],
					['f.name']: params['f.name'],
					['f.issued_at.gt']: params['f.issued_at.gt'],
					['f.issued_at.lt']: params['f.issued_at.lt'],
					['f.client_id']: params['f.client_id'],
					['f.shipment_id']: params['f.shipment_id'],
				},
			},
		}),
	/**
	 * Retrieve an invoice
	 * GET /invoices/:id
	 *
	 * Retrieves the details of a single invoice
	 */ invoices_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/invoices/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List company objects
	 * GET /network/companies
	 *
	 * Returns a list of companies in the network.
	 */ network_company_index: (params: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/network/companies',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.ref']: params['f.ref'],
					['f.metadata.YOUR_METADATA_KEY']:
						params['f.metadata.YOUR_METADATA_KEY'],
				},
			},
		}),
	/**
	 * Create a new company object
	 * POST /network/companies
	 */ network_company_create: () =>
		apiClient({ method: 'POST', path: '/network/companies' }),
	/**
	 * Retrieve a company
	 * GET /network/companies/{id}
	 *
	 * Retrieves the details of a single company.
	 */ network_company_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/network/companies/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update an existing company
	 * PATCH /network/companies/{id}
	 */ network_company_update: (params: { ['id']: string }) =>
		apiClient({
			method: 'PATCH',
			path: '/network/companies/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List of company entity objects
	 * GET /network/company_entities
	 *
	 * Returns a list of the company entity objects in the network.
	 */ company_entity_index: (params: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_id']?: string
		['f.company_ref']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/network/company_entities',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.ref']: params['f.ref'],
					['f.company_id']: params['f.company_id'],
					['f.company_ref']: params['f.company_ref'],
				},
			},
		}),
	/**
	 * Create and return a new company entity
	 * POST /network/company_entities
	 */ network_company_entity_create: () =>
		apiClient({ method: 'POST', path: '/network/company_entities' }),
	/**
	 * Retrieve a company entity
	 * GET /network/company_entities/{id}
	 *
	 * Retrieves the details of a single company entity
	 */ network_company_entity_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/network/company_entities/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update a company entity
	 * PATCH /network/company_entities/{id}
	 */ network_company_entity_update: (params: { ['id']: string }) =>
		apiClient({
			method: 'PATCH',
			path: '/network/company_entities/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List contact objects
	 * GET /network/contacts
	 *
	 * Returns a list of contacts in the network.
	 */ network_contact_index: (params: {
		['page']?: number
		['per']?: number
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.location.id']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/network/contacts',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.company_ref']: params['f.company_ref'],
					['f.company.id']: params['f.company.id'],
					['f.location.id']: params['f.location.id'],
				},
			},
		}),
	/**
	 * Create a new contact object
	 * POST /network/contacts
	 */ network_contact_create: () =>
		apiClient({ method: 'POST', path: '/network/contacts' }),
	/**
	 * Retrieve a contact
	 * GET /network/contacts/{id}
	 *
	 * Retrieves the details of a single contact.
	 */ network_contact_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/network/contacts/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update an existing contact
	 * PATCH /network/contacts/{id}
	 */ network_contact_update: (params: { ['id']: string }) =>
		apiClient({
			method: 'PATCH',
			path: '/network/contacts/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List of location objects
	 * GET /network/locations
	 *
	 * Returns a list of location objects in the network.
	 */ location_index: (params: {
		['page']?: number
		['per']?: number
		['f.ref']?: string
		['f.company_ref']?: string
		['f.company.id']?: string
		['f.contact.id']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/network/locations',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.ref']: params['f.ref'],
					['f.company_ref']: params['f.company_ref'],
					['f.company.id']: params['f.company.id'],
					['f.contact.id']: params['f.contact.id'],
					['f.metadata.YOUR_METADATA_KEY']:
						params['f.metadata.YOUR_METADATA_KEY'],
				},
			},
		}),
	/**
	 * Create and return a new location
	 * POST /network/locations
	 */ network_location_create: () =>
		apiClient({ method: 'POST', path: '/network/locations' }),
	/**
	 * Retrieve a location by id
	 * GET /network/locations/{id}
	 *
	 * Retrieves the details of a single location
	 */ network_location_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/network/locations/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update a network location
	 * PATCH /network/locations/{id}
	 */ location_update: (params: { ['id']: string }) =>
		apiClient({
			method: 'PATCH',
			path: '/network/locations/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Retrieve your company
	 * GET /network/me/companies
	 *
	 * Retrieves the details of your own organization.
	 */ network_company_me: () =>
		apiClient({ method: 'GET', path: '/network/me/companies' }),
	/**
	 * List all containers.
	 * GET /ocean/shipment_container_legs
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 */ ocean_shipment_legs_index: (params: {
		['page']?: number
		['per']?: number
		['f.leg.id']?: number
		['f.shipment_container.id']?: number
		['f.shipment_container.container_number']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/ocean/shipment_container_legs',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.leg.id']: params['f.leg.id'],
					['f.shipment_container.id']: params['f.shipment_container.id'],
					['f.shipment_container.container_number']:
						params['f.shipment_container.container_number'],
				},
			},
		}),
	/**
	 * Retrieve a shipment leg
	 * GET /ocean/shipment_container_legs/:id
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 */ ocean_shipment_legs_show: () =>
		apiClient({ method: 'GET', path: '/ocean/shipment_container_legs/:id' }),
	/**
	 * List all containers.
	 * GET /ocean/shipment_containers
	 *
	 * Returns a list of containers. The containers are sorted descending by creation date.
	 */ container_list: (params: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.container_number']?: string
		['f.metadata.YOUR_METADATA_KEY']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/ocean/shipment_containers',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.container_number']: params['f.container_number'],
					['f.metadata.YOUR_METADATA_KEY']:
						params['f.metadata.YOUR_METADATA_KEY'],
				},
			},
		}),
	/**
	 * Retrieve a container.
	 * GET /ocean/shipment_containers/:id
	 *
	 * Retrieves the details of a single container.
	 */ container_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/ocean/shipment_containers/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List of ports
	 * GET /ports
	 */ ports_index: (params: {
		['page']?: number
		['per']?: number
		['f.port_type']?: 'airport' | 'railport' | 'roadport' | 'seaport'
		['f.unlocode']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/ports',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.port_type']: params['f.port_type'],
					['f.unlocode']: params['f.unlocode'],
				},
			},
		}),
	/**
	 * List all products for a client
	 * GET /products
	 *
	 * Returns a list of all products belonging to this client
	 */ product_index: (params: {
		['f.sku']?: string
		['f.archived_at.exists']?: boolean
		['f.product_properties.TYPE']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/products',
			params: {
				query: {
					['f.sku']: params['f.sku'],
					['f.archived_at.exists']: params['f.archived_at.exists'],
					['f.product_properties.TYPE']: params['f.product_properties.TYPE'],
				},
			},
		}),
	/**
	 * Create a product
	 * POST /products
	 *
	 * Create a new product for this client using the request payload
	 */ product_create: () => apiClient({ method: 'POST', path: '/products' }),
	/**
	 * Retrieve a single product
	 * GET /products/{id}
	 *
	 * Returns the client's product with this ID
	 */ product_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/products/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update a product
	 * PATCH /products/{id}
	 *
	 * Update this product to represent the request payload
	 */ product_update: (params: { ['id']: string }) =>
		apiClient({
			method: 'PATCH',
			path: '/products/{id}',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List all purchase order line items
	 * GET /purchase_order_line_items
	 *
	 * Returns a list of purchase order line items
	 */ purchase_order_line_item_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'cargo_ready_date' | 'created_at'
		['direction']?: 'asc' | 'desc'
		['f.purchase_order.id']?: number
		['f.line_item_number']?: string
		['f.item_key']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/purchase_order_line_items',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.purchase_order.id']: params['f.purchase_order.id'],
					['f.line_item_number']: params['f.line_item_number'],
					['f.item_key']: params['f.item_key'],
				},
			},
		}),
	/**
	 * Retrieve a purchase order line item
	 * GET /purchase_order_line_items/:id
	 *
	 * Returns the details of a purchase order line item
	 */ purchase_order_line_item_show: (params: { ['id']: number }) =>
		apiClient({
			method: 'GET',
			path: '/purchase_order_line_items/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List all purchase orders
	 * GET /purchase_orders
	 *
	 * Returns a list of purchase orders
	 */ purchase_order_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'id'
		['direction']?: 'asc' | 'desc'
		['f.archived_at.exists']?: boolean
		['f.status']?: 'open' | 'closed' | 'cancelled'
		['f.buyer_ref']?: string
		['f.seller_ref']?: string
		['f.role']?: 'buyer' | 'seller'
		['f.shipment.id']?: number
		['f.name']?: string
	}) =>
		apiClient({
			method: 'GET',
			path: '/purchase_orders',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.archived_at.exists']: params['f.archived_at.exists'],
					['f.status']: params['f.status'],
					['f.buyer_ref']: params['f.buyer_ref'],
					['f.seller_ref']: params['f.seller_ref'],
					['f.role']: params['f.role'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.name']: params['f.name'],
				},
			},
		}),
	/**
	 * Retrieve a purchase order
	 * GET /purchase_orders/:id
	 *
	 * Retrieves the details of a single purchase order.
	 */ purchase_order_show: (params: { ['id']: number }) =>
		apiClient({
			method: 'GET',
			path: '/purchase_orders/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * List all shipment route legs
	 * GET /shipment_legs
	 *
	 * Returns a list of shipment route legs. The legs are sorted descending by creation date.
	 */ shipment_leg_index: (params: {
		['page']?: number
		['per']?: number
		['f.shipment.id']?: number
		['f.transportation_mode']?: number
	}) =>
		apiClient({
			method: 'GET',
			path: '/shipment_legs',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['f.shipment.id']: params['f.shipment.id'],
					['f.transportation_mode']: params['f.transportation_mode'],
				},
			},
		}),
	/**
	 * Retrieve a shipment route leg
	 * GET /shipment_legs/:id
	 */ shipment_leg_show: () =>
		apiClient({ method: 'GET', path: '/shipment_legs/:id' }),
	/**
	 * List all shipments
	 * GET /shipments
	 *
	 * Returns a list of shipments.
	 */ shipment_index: (params: {
		['page']?: number
		['per']?: number
		['sort']?: 'id' | 'transportation_mode' | 'status' | 'updated_at'
		['direction']?: 'asc' | 'desc'
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
		apiClient({
			method: 'GET',
			path: '/shipments',
			params: {
				query: {
					['page']: params['page'],
					['per']: params['per'],
					['sort']: params['sort'],
					['direction']: params['direction'],
					['f.transportation_mode']: params['f.transportation_mode'],
					['f.status']: params['f.status'],
					['f.statuses.any']: params['f.statuses.any'],
					['f.container_number']: params['f.container_number'],
					['f.purchase_order']: params['f.purchase_order'],
					['f.sku']: params['f.sku'],
					['f.updated_at.gt']: params['f.updated_at.gt'],
					['f.updated_at.lt']: params['f.updated_at.lt'],
					['f.master_bill_number']: params['f.master_bill_number'],
					['f.house_bill_number']: params['f.house_bill_number'],
					['f.consignee_external_ref']: params['f.consignee_external_ref'],
					['f.metadata.YOUR_METADATA_KEY']:
						params['f.metadata.YOUR_METADATA_KEY'],
				},
			},
		}),
	/**
	 * Retrieve a shipment
	 * GET /shipments/:id
	 *
	 * Retrieves the details of a single shipment.
	 */ shipment_show: (params: { ['id']: string }) =>
		apiClient({
			method: 'GET',
			path: '/shipments/:id',
			params: { path: { ['id']: params['id'] } },
		}),
	/**
	 * Update an existing shipment
	 * PATCH /shipments/:id
	 */ shipment_update: (params: { ['id']: number }) =>
		apiClient({
			method: 'PATCH',
			path: '/shipments/:id',
			params: { path: { ['id']: params['id'] } },
		}),
})
