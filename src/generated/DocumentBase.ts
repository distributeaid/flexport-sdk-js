import { FileMetadataBase } from './FileMetadataBase'
import { ShipmentRefBase } from './ShipmentRefBase'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type DocumentBase = {
	/**
	 * Type of the object. Always /document for this object.
	 */
	readonly _object: '/document'
	/**
	 * Unique identifier for the document
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	/**
	 * Type of the document.
	 *
	 * JSON-schema: string (string)
	 */
	readonly document_type?: string
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
	readonly file_metadata?: FileMetadataBase
	readonly shipment?: ShipmentRefBase
}
