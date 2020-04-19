import { none, some } from 'fp-ts/lib/Option'
import { ApiObjectRef } from './ApiObjectRef'
import { ApiCollectionRef } from './ApiCollectionRef'
import { Type } from '../generated/Type'

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

const isLinkedCollectionRef = (o: { _object: string }) =>
	o._object === Type.CollectionRef

export const linkCollection = (c?: ApiCollectionRef) =>
	c && isLinkedCollectionRef(c)
		? some({
				link: c.link,
				refType: c.ref_type as Type,
		  } as ResolvableCollection)
		: none

const isLinkedObjectRef = (o: { _object: string }) =>
	o._object === Type.ObjectRef

export const linkObject = (c?: ApiObjectRef) =>
	c && isLinkedObjectRef(c)
		? some({
				link: c.link,
				refType: c.ref_type as Type,
		  } as ResolvableObject)
		: none
