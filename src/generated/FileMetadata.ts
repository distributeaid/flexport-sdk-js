/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
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
export type LiftedFileMetadata = TypedApiObject & FileMetadata
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftFileMetadata = (
	original: FileMetadata,
): LiftedFileMetadata => {
	return original
}
