import { none, some } from 'fp-ts/lib/Option'
import { Type } from './types'
import { ApiCollectionRef } from './ApiCollectionRef'
import { ApiObjectRef } from './ApiObjectRef'

export type ResolvableCollection = {
	/**
	 * The type of each individual element of the list that `link` points to.
	 */
	refType: Type
	/**
	 * API end point that points to a list of resources
	 */
	link: string
}

export type ResolvableObject = {
	/**
	 * The type of the object that the link points to.
	 */
	refType: Type
	/**
	 * API end point that points to a list of resources
	 */
	link: string
	/**
	 * The `id` value of the object that the link points to.
	 */
	id: string | number
}

const isLinkedCollectionRef = (o?: { _object: string }) =>
	o?._object === Type.CollectionRef

export const linkCollection = (c: ApiCollectionRef | null) =>
	c !== null && isLinkedCollectionRef(c)
		? some({
				link: c.link,
				refType: c.ref_type as Type,
		  } as ResolvableCollection)
		: none

const isLinkedObjectRef = (o?: { _object: string }) =>
	o?._object === Type.ObjectRef

export const linkObject = (c: ApiObjectRef | null) =>
	c !== null && isLinkedObjectRef(c)
		? some({
				link: c.link,
				refType: c.ref_type as Type,
		  } as ResolvableObject)
		: none
