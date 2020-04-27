import { none, some } from 'fp-ts/lib/Option'
import { ApiObjectRef } from './ApiObjectRef'
import { ApiCollectionRef } from './ApiCollectionRef'
import { Type } from '../generated/Type'
import { ApiPageObject } from './ApiPageObject'
import { ApiObject } from './ApiObject'

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

export type ResolvablePage = {
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

const isLinkedPage = (o: { _object: string }) => o._object === Type.Page

export const linkPage = <A extends ApiObject>(
	dir: 'next' | 'prev',
	c?: ApiPageObject<A>,
) =>
	c &&
	isLinkedPage(c) &&
	((dir === 'prev' && c.prev) || (dir === 'next' && c.next))
		? some({
				link: dir === 'prev' ? c.prev : c.next,
		  } as ResolvablePage)
		: none
