import * as yaml from 'js-yaml'
import { promises as fs } from 'fs'
import * as merge from 'deepmerge'

export const parseOpenAPI = async (
	filename: string,
	correctionsFilename: string,
): Promise<{ [key: string]: any }> => {
	const apiDefinition = yaml.safeLoad(await fs.readFile(filename, 'utf8'))
	const corrections = yaml.safeLoad(
		await fs.readFile(correctionsFilename, 'utf8'),
	)
	return merge(apiDefinition, corrections)
}
