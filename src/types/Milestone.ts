/**
 * Milestones describes the different event types which will trigger a Event
 * object to be sent to your registered Webhook Endpoints.
 *
 * @see https://apibeta.flexport.com/reference/milestones
 */
export enum Milestone {
	/**
	 * Schedule Confirmed
	 *
	 * Estimated departure and arrival dates set for each specified location.
	 */
	shipment__schedule_confirmed = '/shipment#schedule_confirmed',

	/**
	 * Updated Estimated Time of Departure (ETD) (Available upon request.)
	 *
	 * Revised estimate of date when shipment will depart from specified location.
	 */
	shipment_leg__updated_estimated_time_of_departure = '/shipment_leg#updated_estimated_time_of_departure',

	/**
	 * Updated Estimated Time of Arrival (ETA) (Available upon request.)
	 *
	 * Revised estimate of date when shipment will arrive at specified location.
	 */
	shipment_leg__updated_estimated_time_of_arrival = '/shipment_leg#updated_estimated_time_of_arrival',

	/**
	 * Updated Estimated Out for Delivery (Available upon request.)
	 *
	 * Revised estimate of date when shipment is out for delivery.
	 */
	shipment_leg__updated_estimated_out_for_delivery = '/shipment_leg#updated_estimated_out_for_delivery',

	/**
	 * Updated Route (This milestone is still under development) (Available upon request.)
	 *
	 * Updated route to final destination, such as changes to intermediary locations or ports.
	 */
	shipment__updated_route = '/shipment#updated_route',

	/**
	 * Updated Estimated Available for Pickup (Available upon request.)
	 *
	 * Revised estimated of date when shipment will be ready for pickup at the port of delivery.
	 */
	shipment_container_leg__updated_estimated_available_for_pickup = '/shipment_container_leg#updated_estimated_available_for_pickup',

	/**
	 * Actual Time of Arrival (ATA)
	 *
	 * Shipment arrived at specified location.
	 */
	shipment_leg__arrived = '/shipment_leg#arrived',

	/**
	 * Actual Time of Departure (ATD)
	 *
	 * Shipment departed from specified location.
	 */
	shipment_leg__departed = '/shipment_leg#departed',

	/**
	 * Actual Out for Delivery (Available upon request.)
	 *
	 * Shipment departed and is out for delivery
	 */
	shipment_leg__out_for_delivery = '/shipment_leg#out_for_delivery',

	/**
	 * Delivery Complete (Available upon request.)
	 *
	 * Shipment delivery is complete
	 */
	shipment_leg__delivery_completed = '/shipment_leg#delivery_completed',

	/**
	 * Loaded on Board (Available upon request.)
	 *
	 * Shipment container loaded on vessel or rail.
	 */
	oceanshipment_container_leg__loaded_on_board = '/ocean/shipment_container_leg#loaded_on_board',

	/**
	 * Loaded on Truck (Available upon request.)
	 *
	 * Cargo has been transloaded from shipment container to truck.
	 */
	oceanshipment_leg__loaded_on_truck = '/ocean/shipment_leg#loaded_on_truck',

	/**
	 * Unloaded off Board (Available upon request.)
	 *
	 * Shipment container discharged from vessel or rail.
	 */
	oceanshipment_container_leg__unloaded_off_board = '/ocean/shipment_container_leg#unloaded_off_board',

	/**
	 * Arrived at Delivery Location
	 *
	 * Part of a shipment delivered to final destination.
	 */
	shipment_leg__delivered = '/shipment_leg#delivered',

	/**
	 * Delivered in Full
	 *
	 * Entire shipment delivered to final destination, e.g. multi-container shipments.
	 */
	shipment__delivered_in_full = '/shipment#delivered_in_full',

	/**
	 * Shipment Created
	 *
	 * User has confirmed Flexport quote and cargo is getting ready to ship.
	 */
	shipment__created = '/shipment#created',

	/**
	 * Air Booking Confirmed (Available upon request.)
	 *
	 * Shipment is booked with the air carrier.
	 */
	shipment__booking_confirmed = '/shipment#booking_confirmed',

	/**
	 * Updated Cargo Ready Date
	 *
	 * Cargo ready date changed from the original cargo ready date.
	 */
	shipment__cargo_ready_date_changed = '/shipment#cargo_ready_date_changed',

	/**
	 * Documents Sent to Nominated Broker
	 *
	 * Arrival notice sent to client-nominated customs broker. Applicable to non-Flexport customs service shipments only.
	 */
	shipment__documents_sent_to_nominated_broker = '/shipment#documents_sent_to_nominated_broker',

	/**
	 * Commercial Invoices Digitized
	 *
	 * All commercial invoices have been entered into the Flexport system
	 */
	shipments__commercial_invoices_digitized = '/shipments#commercial_invoices_digitized',

	/**
	 * Customs Released
	 *
	 * Shipment cleared customs.
	 */
	shipment__customs_entry_release_status_released = '/shipment#customs_entry_release_status_released',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_agriculture_hold = '/shipment#customs_agriculture_hold',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_entry_release_status_document_required = '/shipment#customs_entry_release_status_document_required',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_entry_release_status_entry_docs_required = '/shipment#customs_entry_release_status_entry_docs_required',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_entry_release_status_pending_intensive_exam = '/shipment#customs_entry_release_status_pending_intensive_exam',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_entry_release_status_release_suspended = '/shipment#customs_entry_release_status_release_suspended',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_entry_release_status_under_cbp_review = '/shipment#customs_entry_release_status_under_cbp_review',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__customs_undergoing_x_ray_exam = '/shipment#customs_undergoing_x_ray_exam',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__export_country_customs_exam = '/shipment#export_country_customs_exam',

	/**
	 * Customs Hold
	 *
	 * Shipment on customs hold or exam.
	 */
	shipment__export_country_magnetism_exam = '/shipment#export_country_magnetism_exam',

	/**
	 * Container Available (Available upon request.)
	 *
	 * Container becomes available for pickup from port.
	 */
	oceanshipment_container_leg__available_for_pickup = '/ocean/shipment_container_leg#available_for_pickup',

	/**
	 * Delivery Appointment Requested (Available upon request.)
	 *
	 * Date the delivery appointment was requested.
	 */
	shipment_leg__delivery_appointment_requested = '/shipment_leg#delivery_appointment_requested',

	/**
	 * Delivery Appointment Scheduled
	 *
	 * Date of the scheduled delivery appointment.
	 */
	shipment_leg__delivery_appointment_scheduled = '/shipment_leg#delivery_appointment_scheduled',

	/**
	 * Filing Submitted for in Bond Transportation
	 *
	 * Date when the filing was submitted.
	 */
	shipment__filing_submitted_for_in_bond_transportation = '/shipment#filing_submitted_for_in_bond_transportation',

	/**
	 * Free Time to Expire
	 *
	 * Date when container free time expires.
	 */
	oceanshipment_container__free_time_to_expire = '/ocean/shipment_container#free_time_to_expire',

	/**
	 * Free Time Expired
	 *
	 * Date when container free time  expired.
	 */
	oceanshipment_container__free_time_expired = '/ocean/shipment_container#free_time_expired',

	/**
	 * FTZ Admission
	 *
	 * Date when carrier is informed that the posted bill has been placed on a FTZ admission.
	 */
	shipment__ftz_admission = '/shipment#ftz_admission',

	/**
	 * Empty Equipment Returned
	 *
	 * Empty container returned to carrier.
	 */
	oceanshipment_container__empty_returned = '/ocean/shipment_container#empty_returned',

	/**
	 * Returned to Shipper
	 *
	 * Some containers returned to shipper.
	 */
	shipment__returned_to_shipper = '/shipment#returned_to_shipper',

	/**
	 * [DEPRECATED] Delivery Appointment Scheduled
	 *
	 * Date and time of the scheduled delivery appointment.
	 */
	shipment_container_leg__delivery_appointment_scheduled = '/shipment_container_leg#delivery_appointment_scheduled',

	/**
	 * Cargo Breakdown Delay
	 *
	 * Delay due to cargo breakdown.
	 */
	shipment__cargo_breakdown_delay = '/shipment#cargo_breakdown_delay',

	/**
	 * Cargo Bumped from Booked Flight
	 *
	 * Delay due to cargo bumped from booked flight.
	 */
	shipment__cargo_bumped_from_booked_flight = '/shipment#cargo_bumped_from_booked_flight',

	/**
	 * Cargo Contamination Delay
	 *
	 * Delay due to cargo contamination.
	 */
	shipment__cargo_contamination_delay = '/shipment#cargo_contamination_delay',

	/**
	 * Cargo Not Available
	 *
	 * Delay due to unavailable cargo.
	 */
	shipment__cargo_not_available = '/shipment#cargo_not_available',

	/**
	 * Cargo Ready Date Changed Exception
	 *
	 * Delay due to a change in the cargo ready date.
	 */
	shipment__cargo_ready_date_changed_exception = '/shipment#cargo_ready_date_changed_exception',

	/**
	 * Cargo Rolled From Booked Vessel
	 *
	 * Delay due to cargo being rolled from vessel.
	 */
	shipment__cargo_rolled_from_booked_vessel = '/shipment#cargo_rolled_from_booked_vessel',

	/**
	 * Dry Run: Pick Up Not Completed
	 *
	 * Delivery not completed due to dry run pickup.
	 */
	shipment__dry_run_pickup = '/shipment#dry_run_pickup',

	/**
	 * Dry Run: Delivery Attempt Not Completed
	 *
	 * Delivery not completed due to no delivery attempt.
	 */
	shipment__dry_run_delivery_attempt_not_completed = '/shipment#dry_run_delivery_attempt_not_completed',

	/**
	 * Equipment Unavailable
	 *
	 * Delay due to unavailable equipment.
	 */
	shipment__equipment_unavailable = '/shipment#equipment_unavailable',

	/**
	 * Flight Delay: Mechanical Problem
	 *
	 * Delay due to mechanical issue with the airplane.
	 */
	shipment__flight_delay_mechanical = '/shipment#flight_delay_mechanical',

	/**
	 * Flight Delay: Schedule Updated By Carrier
	 *
	 * Delay due to a flight schedule change made by the carrier.
	 */
	shipment__flight_delay_schedule_updated_by_carrier = '/shipment#flight_delay_schedule_updated_by_carrier',

	/**
	 * Late Bill of Lading Release
	 *
	 * Delay due to late bill of lading release.
	 */
	shipment__late_bill_of_lading_release = '/shipment#late_bill_of_lading_release',

	/**
	 * Missed Appointment
	 *
	 * Delivery not completed due to missed appointment.
	 */
	shipment__missed_appointment = '/shipment#missed_appointment',

	/**
	 * Missing Cargo
	 *
	 * Delay due to missing cargo.
	 */
	shipment__missing_cargo = '/shipment#missing_cargo',

	/**
	 * No Appointments Available
	 *
	 * Delay due to no appointments available.
	 */
	shipment__no_appointments_available = '/shipment#no_appointments_available',

	/**
	 * No Attempt Made
	 *
	 * Delivery not completed due to no delivery attempt.
	 */
	shipment__no_attempt_made = '/shipment#no_attempt_made',

	/**
	 * Ocean Port Dwell Delay
	 *
	 * Delay due to dwell at ocean port.
	 */
	shipment__ocean_port_dwell_delay = '/shipment#ocean_port_dwell_delay',

	/**
	 * Pending Customs Clearance from Nominated Broker
	 *
	 * Delay due to clearance pending from nominated broker.
	 */
	shipment__pending_customs_clearance_from_nominated_broker = '/shipment#pending_customs_clearance_from_nominated_broker',

	/**
	 * Pending Delivery Appointment Confirmation
	 *
	 * Delay due to a pending delivery appointment confirmation.
	 */
	shipment__pending_delivery_appointment_confirmation = '/shipment#pending_delivery_appointment_confirmation',

	/**
	 * Port Strike Delay
	 *
	 * Delay due to port strike.
	 */
	shipment__port_strike_delay = '/shipment#port_strike_delay',

	/**
	 * Rail Car Equipment Breakdown
	 *
	 * Delay due to rail car equipment breakdown.
	 */
	shipment__rail_car_equipment_breakdown = '/shipment#rail_car_equipment_breakdown',

	/**
	 * Rail Interchange Delay
	 *
	 * Delay due to rail interchange.
	 */
	shipment__rail_interchange_delay = '/shipment#rail_interchange_delay',

	/**
	 * Rail Transfer Delay
	 *
	 * Delay due to rail transfer.
	 */
	shipment__rail_transfer_delay = '/shipment#rail_transfer_delay',

	/**
	 * Shipment Re-Routed by Carrier
	 *
	 * Delay due to reroute made by the carrier.
	 */
	shipment__shipment_rerouted_by_carrier = '/shipment#shipment_rerouted_by_carrier',

	/**
	 * Shipment Re-Routed per Client Request
	 *
	 * Delay due to reroute per client request.
	 */
	shipment__shipment_rerouted_per_client_request = '/shipment#shipment_rerouted_per_client_request',

	/**
	 * Supplier Late Gate In
	 *
	 * Delay due to late shipper gate-in.
	 */
	shipment__supplier_late_gate_in = '/shipment#supplier_late_gate_in',

	/**
	 * Supplier Late Documents
	 *
	 * Delay due to late submission of shipper documents.
	 */
	shipment__supplier_late_documents = '/shipment#supplier_late_documents',

	/**
	 * Transload Delay
	 *
	 * Delay due to transload.
	 */
	shipment__transload_delay = '/shipment#transload_delay',

	/**
	 * Transshipment Delay
	 *
	 * Delay due to transshipment.
	 */
	shipment__transshipment_delay = '/shipment#transshipment_delay',

	/**
	 * Trucker Rejected
	 *
	 * Delivery not completed due to rejection at delivery site.
	 */
	shipment__trucker_rejected = '/shipment#trucker_rejected',

	/**
	 * Trucker's Hours Expired
	 *
	 * Delay due to expired trucker hours.
	 */
	shipment__truckers_hours_expired = '/shipment#truckers_hours_expired',

	/**
	 * Trucking Delay: Chassis Problem
	 *
	 * Delay due to a trucking chassis problem.
	 */
	shipment__trucking_delay_chassis_problem = '/shipment#trucking_delay_chassis_problem',

	/**
	 * Trucking Delay: Mechanical Problem
	 *
	 * Delivery not completed due to truck mechanical problem.
	 */
	shipment__trucking_delay_mechanical_problem = '/shipment#trucking_delay_mechanical_problem',

	/**
	 * Trucking Delay: Port Congestion
	 *
	 * Delay due to port congestion.
	 */
	shipment__trucking_delay_port_congestion = '/shipment#trucking_delay_port_congestion',

	/**
	 * Trucking Delay: Other
	 *
	 * Delay due to other trucking reason.
	 */
	shipment__trucking_delay_other = '/shipment#trucking_delay_other',

	/**
	 * Trucking Delay: Strike
	 *
	 * Delay due to trucking strike.
	 */
	shipment__trucking_delay_strike = '/shipment#trucking_delay_strike',

	/**
	 * Trucking Delay: Traffic
	 *
	 * Delay due to traffic.
	 */
	shipment__trucking_delay_traffic = '/shipment#trucking_delay_traffic',

	/**
	 * Vessel Delay: Mechanical  Problem
	 *
	 * Delay due to mechanical issue with the vessel.
	 */
	shipment__vessel_delay_mechanical = '/shipment#vessel_delay_mechanical',

	/**
	 * Vessel Delay: Port Congestion
	 *
	 * Delay due to port congestion.
	 */
	shipment__vessel_delay_port_congestion = '/shipment#vessel_delay_port_congestion',

	/**
	 * Vessel Delay: Schedule Updated By Carrier
	 *
	 * Delay due to a vessel schedule change made by the carrier.
	 */
	shipment__vessel_delay_schedule_updated_by_carrier = '/shipment#vessel_delay_schedule_updated_by_carrier',

	/**
	 * Warehouse Devan Delay
	 *
	 * Delay due to warehouse devan.
	 */
	shipment__warehouse_devan_delay = '/shipment#warehouse_devan_delay',

	/**
	 * Weather Delay
	 *
	 * Delay due to weather conditions.
	 */
	shipment__weather_delay = '/shipment#weather_delay',

	/**
	 * Invoice Payment Made
	 *
	 * Invoice payment has been made
	 */
	invoice__invoice_payment_made = '/invoice#invoice_payment_made',

	/**
	 * Invoice Due Date Adjusted
	 *
	 * Invoice payment due date has been adjusted
	 */
	invoice__invoice_due_date_adjusted = '/invoice#invoice_due_date_adjusted',

	/**
	 * Invoice Shared
	 *
	 * Invoice has been shared
	 */
	invoice__invoice_shared = '/invoice#invoice_shared',

	/**
	 * Invoice Voided
	 *
	 * Invoice has been voided
	 */
	invoice__invoice_voided = '/invoice#invoice_voided',

	/**
	 * Invoice Credit Applied
	 *
	 * Invoice credit has been applied
	 */
	invoice__invoice_credit_applied = '/invoice#invoice_credit_applied',

	/**
	 * Invoice Refund Applied
	 *
	 * Invoice refund has been applied
	 */
	invoice__invoice_refund_applied = '/invoice#invoice_refund_applied',

	/**
	 * Invoice Payment Failed
	 *
	 * Invoice payment failed
	 */
	invoice__invoice_payment_failed = '/invoice#invoice_payment_failed',
}
