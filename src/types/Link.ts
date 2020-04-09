import { ApiCollectionRef } from './ApiCollectionRef'
import { Client } from '../createClient'
import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { Page } from './Page'
import { isLinkedCollectionRef } from './ApiCollectionRef'
import { isLinkedObjectRef, ApiObjectRef } from './ApiObjectRef'
import { TaskEither } from 'fp-ts/lib/TaskEither'
import { none, Option, some } from 'fp-ts/lib/Option'

export type ResolvableCollection<A extends ApiObject> = (
	apiClient: Client,
) => TaskEither<ApiError, Page<A>>

export const toCollectionLink = <A extends ApiObject>({
	link,
}: ApiCollectionRef): Option<ResolvableCollection<A>> =>
	some((apiClient: Client) => apiClient.resolveCollectionRef<A>(link))

export type ResolvableObject<A extends ApiObject> = (
	apiClient: Client,
) => TaskEither<ApiError, A>

export const toObjectLink = <A extends ApiObject>({
	link,
}: ApiObjectRef): Option<ResolvableObject<A>> =>
	some((apiClient: Client) => apiClient.resolveObjectRef<A>(link))

export const linkCollection = <A extends ApiObject>(c: any | null) =>
	isLinkedCollectionRef(c) ? toCollectionLink<A>(c) : none

export const linkObject = <A extends ApiObject>(c: any | null) =>
	isLinkedObjectRef(c) ? toObjectLink<A>(c) : none
