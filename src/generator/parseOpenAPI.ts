import * as yaml from 'js-yaml'
import { promises as fs } from 'fs'
import * as merge from 'deepmerge'
import { nullToUndefined } from '../transformer'

const arrayMerge = (target: any[], source: any[], options: merge.Options) =>
	source.map((v, k) =>
		options.isMergeableObject?.(v) ?? false
			? merge(target[k] ?? v, v, { arrayMerge })
			: target[k] ?? v,
	)

export const parseOpenAPI = async (
	filename: string,
	correctionsFilename: string,
): Promise<{ [key: string]: any }> => {
	const apiDefinition = yaml.safeLoad(await fs.readFile(filename, 'utf8'))
	const corrections = yaml.safeLoad(
		await fs.readFile(correctionsFilename, 'utf8'),
	)
	return nullToUndefined(
		merge(
			apiDefinition as Record<string, any>,
			corrections as Record<string, any>,
			{
				arrayMerge,
			},
		),
	)
}
