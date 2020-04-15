/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type FileMetadataBase = {
	/**
	 * Type of the object. Always /file_metadata for this object.
	 */
	readonly _object: '/file_metadata'
	/**
	 * Size of the file in bytes
	 *
	 * JSON-schema: integer
	 * @example 20000
	 */
	readonly size?: number
	/**
	 * Date this document was uploaded.
	 *
	 * JSON-schema: string (string)
	 */
	readonly uploaded_at?: string
}
