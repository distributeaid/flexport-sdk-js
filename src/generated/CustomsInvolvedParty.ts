/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { Address } from './Address'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { TypedApiObject } from '../types/TypedApiObject'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { linkObject } from '../links'
export type CustomsInvolvedParty = {
	/**
	 * Type of the object
	 */
	readonly _object: Type.CustomsInvolvedParty
	readonly address?: Address
	readonly company_entity?: ApiObjectRef
	/**
	 * The name of involved party.
	 *
	 * JSON-schema: string
	 * @example "The West Coast Company"
	 */
	readonly name?: string
	/**
	 * The type of involved party.
	 *
	 * JSON-schema: string
	 * @example "consignee"
	 */
	readonly type?: string
}
export type LiftedCustomsInvolvedParty = TypedApiObject &
	Omit<CustomsInvolvedParty, 'company_entity'> & {
		readonly company_entity: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftCustomsInvolvedParty = (
	original: CustomsInvolvedParty,
): LiftedCustomsInvolvedParty => {
	const { company_entity, ...rest } = original
	return {
		...rest,
		company_entity: linkObject(company_entity),
	}
}
