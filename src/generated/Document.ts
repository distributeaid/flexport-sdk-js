/**
 * Auto-generated file. Do not change.
 */
import { FileMetadata } from './FileMetadata'
import { Type } from './Type'
import { ApiObjectRef } from '../types/ApiObjectRef'
import { linkObject } from '../links'
import { Option } from 'fp-ts/lib/Option'
import { ResolvableObject } from '../types/Link'
import { TypedApiObject } from '../types/TypedApiObject'
export type Document = {
	/**
	 * Type of the object. Always /document for this object.
	 */
	readonly _object: Type.Document
	/**
	 * Unique identifier for the document
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	/**
	 * JSON-schema: string
	 */
	readonly file_name?: string
	/**
	 * Type of the document.
	 *
	 * JSON-schema: string (string)
	 */
	readonly document_type?: string
	/**
	 * A short message or description about the document
	 *
	 * JSON-schema: string
	 */
	readonly memo?: string
	/**
	 * The link that can be used to download the file.
	 *
	 * JSON-schema: string (uri)
	 */
	readonly file_link?: string
	/**
	 * Date string this document was archived. Null if not archived.
	 *
	 * JSON-schema: string (string)
	 */
	readonly archived_at?: string
	readonly file_metadata?: FileMetadata
	readonly shipment?: ApiObjectRef
}
export type LiftedDocument = TypedApiObject &
	Omit<Document, 'shipment'> & {
		readonly shipment: Option<ResolvableObject>
	}
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftDocument = (original: Document): LiftedDocument => {
	const { shipment, ...rest } = original
	return {
		...rest,
		shipment: linkObject(shipment),
	}
}
