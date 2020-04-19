import { Type } from './Type'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type FileMetadata = {
	/**
	 * Type of the object. Always /file_metadata for this object.
	 */
	readonly _object: Type.FileMetadata
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
