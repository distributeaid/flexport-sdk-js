/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Money } from './Money'
import { InvoiceRate } from './InvoiceRate'
import { InvoiceQuantity } from './InvoiceQuantity'
import { TypedApiObject } from '../types/TypedApiObject'
export enum InvoiceItemCategoryTypes {
	FREIGHT = 'freight',
	ORIGIN = 'origin',
	DESTINATION = 'destination',
	CUSTOMS = 'customs',
	ADDITIONAL = 'additional',
	CAPITAL = 'capital',
}
export type InvoiceItem = {
	/**
	 * Type of the object.
	 */
	readonly _object: Type.InvoiceItem
	/**
	 * Description of charge.
	 *
	 * JSON-schema: string
	 * @example "FCL 40' HQ"
	 */
	readonly name?: string
	/**
	 * Code describing the charge.
	 *
	 * JSON-schema: string
	 * @example "fcl_40_hq"
	 */
	readonly slug?: string
	/**
	 * Category of the charge.
	 *
	 * JSON-schema: string
	 */
	readonly category?: InvoiceItemCategoryTypes
	readonly amount?: Money
	readonly rate?: InvoiceRate
	readonly quantity?: InvoiceQuantity
}
export type LiftedInvoiceItem = TypedApiObject & InvoiceItem
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftInvoiceItem = (original: InvoiceItem): LiftedInvoiceItem => {
	return original
}
