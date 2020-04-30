import { none, some } from 'fp-ts/lib/Option'
import { Type } from './generated'
import { ApiCollectionRef } from './types/ApiCollectionRef'
import {
	ResolvableCollection,
	ApiObjectRef,
	ResolvableObject,
	ApiObject,
	ResolvablePage,
} from './types'
import { ApiPageObject } from './types/ApiPageObject'

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
