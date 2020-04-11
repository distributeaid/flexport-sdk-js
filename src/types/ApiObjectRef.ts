import { Type } from './types'

/**
 * ObjectRefs are expandable
 *
 * @see https://apibeta.flexport.com/reference/links#objectref
 */
export type ApiObjectRef = {
	/**
	 * String representing the object’s type. Always `/api/refs/object` for this object.
	 */
	_object: Type.ObjectRef

	/**
	 * The `_object` value of the object that the link points to.
	 */
	ref_type: string

	/**
	 * API end point that points to a resource.
	 */
	link: string

	/**
	 * The `id` value of the object that the link points to.
	 */
	id: string | number
}
