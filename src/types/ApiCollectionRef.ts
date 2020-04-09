import { Type } from './types'

/**
 * CollectionRefs are expandable
 *
 * @see https://apibeta.flexport.com/reference/links#collectionref
 */
export type ApiCollectionRef = {
	/**
	 * String representing the object’s type. Always `/api/refs/collection` for this object.
	 */
	_object: Type.COLLECTION_REF_TYPE

	/**
	 * The `_object` value of each individual element of the list that `link` points to.
	 */
	ref_type: string

	/**
	 * API end point that points to a list of resources
	 */
	link: string
}
