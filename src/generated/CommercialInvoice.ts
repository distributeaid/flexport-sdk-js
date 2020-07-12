/**
 * Auto-generated file. Do not change.
 */
import { Address } from './Address'
import { CommercialInvoiceLineItem } from './CommercialInvoiceLineItem'
import { CustomsInvolvedParty } from './CustomsInvolvedParty'
import { Metadata } from './Metadata'
import { Money } from './Money'
import { Type } from './Type'
import { Volume } from './Volume'
import { Weight } from './Weight'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { linkObject } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export type CommercialInvoice = {
	/**
	 * Type of the object. Always /commercial_invoice for this object.
	 */
	readonly _object: Type.CommercialInvoice
	/**
	 * Unique identifier for the commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "abcxyz-23456-def"
	 */
	readonly id?: string
	/**
	 * Invoice number on the commercial invoice, typically used for display purposes. Can only contain letters, numbers, and hyphens.
	 *
	 * JSON-schema: string
	 * @example "INVOICE-04-05-2020"
	 */
	readonly invoice_number?: string
	/**
	 * JSON-schema: array
	 */
	readonly line_items?: CommercialInvoiceLineItem[]
	/**
	 * JSON-schema: array
	 */
	readonly involved_parties?: CustomsInvolvedParty[]
	/**
	 * JSON-schema: array
	 */
	readonly manufacturer_addresses?: Address[]
	readonly metadata?: Metadata
	readonly shipment?: ApiObjectRef
	/**
	 * Total units on this commercial invoice.
	 *
	 * JSON-schema: string
	 * @example "123.0"
	 */
	readonly total_unit_count?: string
	readonly total_value?: Money
	readonly total_volume?: Volume
	readonly total_weight?: Weight
}
export type LiftedCommercialInvoice = TypedApiObject &
	Omit<CommercialInvoice, 'shipment'> & {
		readonly shipment: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCommercialInvoice = (
	original: CommercialInvoice,
): LiftedCommercialInvoice => {
	const { shipment, ...rest } = original
	return {
		...rest,
		shipment: linkObject(shipment),
	}
}
