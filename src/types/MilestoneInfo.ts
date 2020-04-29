import { Milestone } from './Milestone'
import { Type } from './types'

/**
 * @see https://apibeta.flexport.com/reference/milestones
 */
export const MilestoneInfo: {
	[key: string]: {
		name: string
		description: string
		resource: Type
		location?: string
	}
} = {
	[Milestone.shipment__schedule_confirmed]: {
		name: 'Schedule Confirmed',
		description:
			'Estimated departure and arrival dates set for each specified location.',
		resource: Type.Shipment,
	},

	[Milestone.shipment_leg__updated_estimated_time_of_departure]: {
		name: 'Updated Estimated Time of Departure (ETD)',
		description:
			'Revised estimate of date when shipment will depart from specified location.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the departure location',
	},

	[Milestone.shipment_leg__updated_estimated_time_of_arrival]: {
		name: 'Updated Estimated Time of Arrival (ETA)',
		description:
			'Revised estimate of date when shipment will arrive at specified location.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the arrival location',
	},

	[Milestone.shipment_leg__updated_estimated_out_for_delivery]: {
		name: 'Updated Estimated Out for Delivery',
		description: 'Revised estimate of date when shipment is out for delivery.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the departure location',
	},

	[Milestone.shipment__updated_route]: {
		name: 'Updated Route (This milestone is still under development)',
		description:
			'Updated route to final destination, such as changes to intermediary locations or ports.',
		resource: Type.Shipment,
	},

	[Milestone.shipment_container_leg__updated_estimated_available_for_pickup]: {
		name: 'Updated Estimated Available for Pickup',
		description:
			'Revised estimated of date when shipment will be ready for pickup at the port of delivery.',
		resource: Type.ContainerLeg,
		location: 'ShipmentNode for the departure location',
	},

	[Milestone.shipment_leg__arrived]: {
		name: 'Actual Time of Arrival (ATA)',
		description: 'Shipment arrived at specified location.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the arrival location',
	},

	[Milestone.shipment_leg__departed]: {
		name: 'Actual Time of Departure (ATD)',
		description: 'Shipment departed from specified location.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the departure location',
	},

	[Milestone.shipment_leg__out_for_delivery]: {
		name: 'Actual Out for Delivery',
		description: 'Shipment departed and is out for delivery',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the departure location',
	},

	[Milestone.shipment_leg__delivery_completed]: {
		name: 'Delivery Complete',
		description: 'Shipment delivery is complete',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the destination location',
	},

	[Milestone.oceanshipment_container_leg__loaded_on_board]: {
		name: 'Loaded on Board',
		description: 'Shipment container loaded on vessel or rail.',
		resource: Type.ContainerLeg,
		location: 'ShipmentNode for where the container was loaded',
	},

	[Milestone.oceanshipment_leg__loaded_on_truck]: {
		name: 'Loaded on Truck',
		description: 'Cargo has been transloaded from shipment container to truck.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for where the cargo was loaded on the truck',
	},

	[Milestone.oceanshipment_container_leg__unloaded_off_board]: {
		name: 'Unloaded off Board',
		description: 'Shipment container discharged from vessel or rail.',
		resource: Type.ContainerLeg,
		location: 'ShipmentNode for where the container was unloaded',
	},

	[Milestone.shipment_leg__delivered]: {
		name: 'Arrived at Delivery Location',
		description: 'Part of a shipment delivered to final destination.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the delivery location',
	},

	[Milestone.shipment__delivered_in_full]: {
		name: 'Delivered in Full',
		description:
			'Entire shipment delivered to final destination, e.g. multi-container shipments.',
		resource: Type.Shipment,
		location: 'ShipmentNode for the shipment final destination',
	},

	[Milestone.shipment__created]: {
		name: 'Shipment Created',
		description:
			'User has confirmed Flexport quote and cargo is getting ready to ship.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__booking_confirmed]: {
		name: 'Air Booking Confirmed',
		description: 'Shipment is booked with the air carrier.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_ready_date_changed]: {
		name: 'Updated Cargo Ready Date',
		description: 'Cargo ready date changed from the original cargo ready date.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__updated_cargo_ready_date]: {
		name: 'Updated Cargo Ready Date',
		description: 'Cargo ready date changed.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__documents_sent_to_nominated_broker]: {
		name: 'Documents Sent to Nominated Broker',
		description:
			'Arrival notice sent to client-nominated customs broker. Applicable to non-Flexport customs service shipments only.',
		resource: Type.Shipment,
	},

	[Milestone.shipments__commercial_invoices_digitized]: {
		name: 'Commercial Invoices Digitized',
		description:
			'All commercial invoices have been entered into the Flexport system',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_released]: {
		name: 'Customs Released',
		description: 'Shipment cleared customs.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_agriculture_hold]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_document_required]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_entry_docs_required]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_pending_intensive_exam]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_release_suspended]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_entry_release_status_under_cbp_review]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__customs_undergoing_x_ray_exam]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__export_country_customs_exam]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__export_country_magnetism_exam]: {
		name: 'Customs Hold',
		description: 'Shipment on customs hold or exam.',
		resource: Type.Shipment,
	},

	[Milestone.oceanshipment_container_leg__available_for_pickup]: {
		name: 'Container Available',
		description: 'Container becomes available for pickup from port.',
		resource: Type.ContainerLeg,
		location: 'ShipmentNode for the location of the container',
	},

	[Milestone.shipment_leg__delivery_appointment_requested]: {
		name: 'Delivery Appointment Requested',
		description: 'Date the delivery appointment was requested.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the delivery location',
	},

	[Milestone.shipment_leg__delivery_appointment_scheduled]: {
		name: 'Delivery Appointment Scheduled',
		description: 'Date of the scheduled delivery appointment.',
		resource: Type.ShipmentLeg,
		location: 'ShipmentNode for the delivery location',
	},

	[Milestone.shipment__filing_submitted_for_in_bond_transportation]: {
		name: 'Filing Submitted for in Bond Transportation',
		description: 'Date when the filing was submitted.',
		resource: Type.Shipment,
	},

	[Milestone.oceanshipment_container__free_time_to_expire]: {
		name: 'Free Time to Expire',
		description: 'Date when container free time expires.',
		resource: Type.Container,
		location:
			'ShipmentNode for the location of where the container will be when the container free time expires',
	},

	[Milestone.oceanshipment_container__free_time_expired]: {
		name: 'Free Time Expired',
		description: 'Date when container free time  expired.',
		resource: Type.Container,
		location: 'ShipmentNode for the location of the container',
	},

	[Milestone.shipment__ftz_admission]: {
		name: 'FTZ Admission',
		description:
			'Date when carrier is informed that the posted bill has been placed on a FTZ admission.',
		resource: Type.Shipment,
	},

	[Milestone.oceanshipment_container__empty_returned]: {
		name: 'Empty Equipment Returned',
		description: 'Empty container returned to carrier.',
		resource: Type.Container,
		location: 'ShipmentNode for the location of the container',
	},

	[Milestone.shipment__returned_to_shipper]: {
		name: 'Returned to Shipper',
		description: 'Some containers returned to shipper.',
		resource: Type.Shipment,
	},

	[Milestone.shipment_container_leg__delivery_appointment_scheduled]: {
		name: '[DEPRECATED] Delivery Appointment Scheduled',
		description: 'Date and time of the scheduled delivery appointment.',
		resource: Type.ContainerLeg,
		location: 'ShipmentNode for the delivery location',
	},

	[Milestone.shipment__cargo_breakdown_delay]: {
		name: 'Cargo Breakdown Delay',
		description: 'Delay due to cargo breakdown.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_bumped_from_booked_flight]: {
		name: 'Cargo Bumped from Booked Flight',
		description: 'Delay due to cargo bumped from booked flight.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_contamination_delay]: {
		name: 'Cargo Contamination Delay',
		description: 'Delay due to cargo contamination.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_not_available]: {
		name: 'Cargo Not Available',
		description: 'Delay due to unavailable cargo.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_ready_date_changed_exception]: {
		name: 'Cargo Ready Date Changed Exception',
		description: 'Delay due to a change in the cargo ready date.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__cargo_rolled_from_booked_vessel]: {
		name: 'Cargo Rolled From Booked Vessel',
		description: 'Delay due to cargo being rolled from vessel.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__dry_run_pickup]: {
		name: 'Dry Run: Pick Up Not Completed',
		description: 'Delivery not completed due to dry run pickup.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__dry_run_delivery_attempt_not_completed]: {
		name: 'Dry Run: Delivery Attempt Not Completed',
		description: 'Delivery not completed due to no delivery attempt.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__equipment_unavailable]: {
		name: 'Equipment Unavailable',
		description: 'Delay due to unavailable equipment.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__flight_delay_mechanical]: {
		name: 'Flight Delay: Mechanical Problem',
		description: 'Delay due to mechanical issue with the airplane.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__flight_delay_schedule_updated_by_carrier]: {
		name: 'Flight Delay: Schedule Updated By Carrier',
		description: 'Delay due to a flight schedule change made by the carrier.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__late_bill_of_lading_release]: {
		name: 'Late Bill of Lading Release',
		description: 'Delay due to late bill of lading release.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__missed_appointment]: {
		name: 'Missed Appointment',
		description: 'Delivery not completed due to missed appointment.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__missing_cargo]: {
		name: 'Missing Cargo',
		description: 'Delay due to missing cargo.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__no_appointments_available]: {
		name: 'No Appointments Available',
		description: 'Delay due to no appointments available.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__no_attempt_made]: {
		name: 'No Attempt Made',
		description: 'Delivery not completed due to no delivery attempt.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__ocean_port_dwell_delay]: {
		name: 'Ocean Port Dwell Delay',
		description: 'Delay due to dwell at ocean port.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__pending_customs_clearance_from_nominated_broker]: {
		name: 'Pending Customs Clearance from Nominated Broker',
		description: 'Delay due to clearance pending from nominated broker.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__pending_delivery_appointment_confirmation]: {
		name: 'Pending Delivery Appointment Confirmation',
		description: 'Delay due to a pending delivery appointment confirmation.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__port_strike_delay]: {
		name: 'Port Strike Delay',
		description: 'Delay due to port strike.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__rail_car_equipment_breakdown]: {
		name: 'Rail Car Equipment Breakdown',
		description: 'Delay due to rail car equipment breakdown.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__rail_interchange_delay]: {
		name: 'Rail Interchange Delay',
		description: 'Delay due to rail interchange.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__rail_transfer_delay]: {
		name: 'Rail Transfer Delay',
		description: 'Delay due to rail transfer.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__shipment_rerouted_by_carrier]: {
		name: 'Shipment Re-Routed by Carrier',
		description: 'Delay due to reroute made by the carrier.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__shipment_rerouted_per_client_request]: {
		name: 'Shipment Re-Routed per Client Request',
		description: 'Delay due to reroute per client request.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__supplier_late_gate_in]: {
		name: 'Supplier Late Gate In',
		description: 'Delay due to late shipper gate-in.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__supplier_late_documents]: {
		name: 'Supplier Late Documents',
		description: 'Delay due to late submission of shipper documents.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__transload_delay]: {
		name: 'Transload Delay',
		description: 'Delay due to transload.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__transshipment_delay]: {
		name: 'Transshipment Delay',
		description: 'Delay due to transshipment.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucker_rejected]: {
		name: 'Trucker Rejected',
		description: 'Delivery not completed due to rejection at delivery site.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__truckers_hours_expired]: {
		name: "Trucker's Hours Expired",
		description: 'Delay due to expired trucker hours.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_chassis_problem]: {
		name: 'Trucking Delay: Chassis Problem',
		description: 'Delay due to a trucking chassis problem.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_mechanical_problem]: {
		name: 'Trucking Delay: Mechanical Problem',
		description: 'Delivery not completed due to truck mechanical problem.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_port_congestion]: {
		name: 'Trucking Delay: Port Congestion',
		description: 'Delay due to port congestion.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_other]: {
		name: 'Trucking Delay: Other',
		description: 'Delay due to other trucking reason.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_strike]: {
		name: 'Trucking Delay: Strike',
		description: 'Delay due to trucking strike.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__trucking_delay_traffic]: {
		name: 'Trucking Delay: Traffic',
		description: 'Delay due to traffic.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__vessel_delay_mechanical]: {
		name: 'Vessel Delay: Mechanical  Problem',
		description: 'Delay due to mechanical issue with the vessel.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__vessel_delay_port_congestion]: {
		name: 'Vessel Delay: Port Congestion',
		description: 'Delay due to port congestion.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__vessel_delay_schedule_updated_by_carrier]: {
		name: 'Vessel Delay: Schedule Updated By Carrier',
		description: 'Delay due to a vessel schedule change made by the carrier.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__warehouse_devan_delay]: {
		name: 'Warehouse Devan Delay',
		description: 'Delay due to warehouse devan.',
		resource: Type.Shipment,
	},

	[Milestone.shipment__weather_delay]: {
		name: 'Weather Delay',
		description: 'Delay due to weather conditions.',
		resource: Type.Shipment,
	},

	[Milestone.invoice__invoice_payment_made]: {
		name: 'Invoice Payment Made',
		description: 'Invoice payment has been made',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_due_date_adjusted]: {
		name: 'Invoice Due Date Adjusted',
		description: 'Invoice payment due date has been adjusted',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_shared]: {
		name: 'Invoice Shared',
		description: 'Invoice has been shared',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_voided]: {
		name: 'Invoice Voided',
		description: 'Invoice has been voided',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_credit_applied]: {
		name: 'Invoice Credit Applied',
		description: 'Invoice credit has been applied',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_refund_applied]: {
		name: 'Invoice Refund Applied',
		description: 'Invoice refund has been applied',
		resource: Type.Invoice,
	},

	[Milestone.invoice__invoice_payment_failed]: {
		name: 'Invoice Payment Failed',
		description: 'Invoice payment failed',
		resource: Type.Invoice,
	},
} as const
