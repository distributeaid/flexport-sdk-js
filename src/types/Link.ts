import { ApiCollectionRef } from './ApiCollectionRef'
import { Client } from '../createClient'
import { ApiObject } from './ApiObject'
import { ApiError } from './ApiError'
import { Page } from './Page'
import { Either } from 'fp-ts/lib/Either'
import { isLinkedCollectionRef } from './ApiCollectionRef'
import { isLinkedObjectRef, ApiObjectRef } from './ApiObjectRef'

export type ResolvableCollection<A extends ApiObject> = (
	apiClient: Client,
) => Promise<Either<ApiError, Page<A>>>

export const toCollectionLink = <A extends ApiObject>({
	link,
}: ApiCollectionRef): ResolvableCollection<A> => async (apiClient: Client) =>
	apiClient.resolveCollectionRef<A>(link)

export type ResolvableObject<A extends ApiObject> = (
	apiClient: Client,
) => Promise<Either<ApiError, A>>

export const toObjectLink = <A extends ApiObject>({
	link,
}: ApiObjectRef): ResolvableObject<A> => async (apiClient: Client) =>
	apiClient.resolveObjectRef<A>(link)

export const linkCollection = <A extends ApiObject>(c: any | null) =>
	isLinkedCollectionRef(c) ? toCollectionLink<A>(c) : undefined

export const linkObject = <A extends ApiObject>(c: any | null) =>
	isLinkedObjectRef(c) ? toObjectLink<A>(c) : undefined
