export type ApiObject = {
	/**
	 * String representing the object’s type.
	 */
	_object: string
	/**
	 * The full path to the resource(s) requested
	 */
	self: string
	/**
	 * The version of the request.
	 *
	 * @see https://apibeta.flexport.com/reference-link/versioning
	 */
	version: 2
	[key: string]: any | null
}
