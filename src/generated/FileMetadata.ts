/**
 * Auto-generated file. Do not change. 
 */
import { Type } from "./Type";
export type FileMetadata = {
    /**
     * Type of the object. Always /file_metadata for this object.
     */
    readonly _object: Type.FileMetadata;
    /**
     * Size of the file in bytes
     *
     * JSON-schema: integer
     * @example 20000
     */
    readonly size?: number;
    /**
     * Date this document was uploaded.
     *
     * JSON-schema: string (string)
     */
    readonly uploaded_at?: string;
};
export type LiftedFileMetadata = Omit<FileMetadata, > & {};
/**
 * Lifts an object return from a Flexport API responses into the SDK domain by augmenting them with higher level properties.
 */
export const liftFileMetadata = (original: FileMetadata) => {
    return original;
};