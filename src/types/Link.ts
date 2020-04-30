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
