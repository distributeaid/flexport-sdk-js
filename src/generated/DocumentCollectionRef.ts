/**
 * Auto-generated file. Do not change.
 */
import { Type } from './Type'
import { TypedApiObject } from '../types/TypedApiObject'
export type DocumentCollectionRef = {
	readonly _object: Type.CollectionRef
	/**
	 * JSON-schema: string
	 * @example "/document"
	 */
	readonly ref_type: string
	/**
	 * JSON-schema: string
	 * @example "https://api.flexport.com/document?f.shipment.id=2983"
	 */
	readonly link: string
}
export type LiftedDocumentCollectionRef = TypedApiObject & DocumentCollectionRef
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftDocumentCollectionRef = (
	original: DocumentCollectionRef,
): LiftedDocumentCollectionRef => original
