import { Type } from './Type'
import { Metadata } from './Metadata'
import { CompanyEntity } from './CompanyEntity'
import { Location } from './Location'
import { Contact } from './Contact'
/**
 * Auto-generated type. Do not change.
 * @see https://api.flexport.com/docs/v2/flexport
 */
export type Company = {
	/**
	 * Type of the object. Always /network/company for this object.
	 */
	readonly _object: Type.Company
	/**
	 * Unique identifier for the company
	 *
	 * JSON-schema: string (string)
	 */
	readonly id?: string
	readonly metadata?: Metadata
	/**
	 * JSON-schema: string
	 */
	readonly name?: string
	/**
	 * JSON-schema: string
	 */
	readonly ref?: string
	/**
	 * JSON-schema: boolean
	 */
	readonly editable?: boolean
	/**
	 * JSON-schema: array
	 */
	readonly entities?: CompanyEntity[]
	/**
	 * JSON-schema: array
	 */
	readonly locations?: Location[]
	/**
	 * JSON-schema: array
	 */
	readonly contacts?: Contact[]
}
