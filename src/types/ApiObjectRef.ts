export const OBJECT_REF_TYPE = '/api/refs/object'

/**
 * ObjectRefs are expandable
 *
 * @see https://apibeta.flexport.com/reference/links#objectref
 */
export type ApiObjectRef = {
	/**
	 * String representing the object’s type. Always `/api/refs/object` for this object.
	 */
	_object: typeof OBJECT_REF_TYPE

	/**
	 *The `_object` value of each individual element of the list that `link` points to.
	 */
	ref_type: string

	/**
	 * API end point that points to a list of resources
	 */
	link: string

	/**
	 * The `id` value of the object that the link points to.
	 */
	id: number
}

export const isLinkedObjectRef = (o?: { _object: string }) =>
	o?._object === OBJECT_REF_TYPE
