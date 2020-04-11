import { passThrough } from '../transformer/transform'
import { ApiObject } from './ApiObject'
import { Either, left } from 'fp-ts/lib/Either'
import { ApiError, createError } from './ApiError'
import { Type } from './types'

export type Weight = ApiObject & {
	/**
	 * String representing the object’s type. Always `/quantity/weight` for this object.
	 */
	_object: Type.Weight

	/**
	 * Specifies the quantity of units as a float.
	 */
	value: number

	/**
	 * Specifies the unit of measure for this quantity: either `kg` (kilograms) or `lbs` (pounds).
	 */
	unit: 'kg' | 'lbs'
}

export type Volume = Weight & {
	/**
	 * String representing the object’s type. Always `/quantity/weight` for this object.
	 */
	_object: Type.Volume

	/**
	 * Specifies the unit of measure for this quantity:  either `cbm` (cubic meters) or `cbft` (cubic feet)
	 */
	unit: 'cbm' | 'cbft'
}

export const toQuantity = (o: ApiObject): Either<ApiError, Quantity> => {
	if (o._object === Type.Weight) return passThrough<Weight>(o as Weight)
	if (o._object === Type.Volume) return passThrough<Volume>(o as Volume)
	return left(createError(`Unknown quantity: ${o._object}!`))
}

export type Quantity = Weight | Volume
