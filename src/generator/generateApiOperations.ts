import { parseOpenAPI } from './parseOpenAPI'
import * as path from 'path'

type Operation = {
	operationId: string
	summary: string
	description: string
	tags?: string[]
}

parseOpenAPI(
	path.join(process.cwd(), 'api-docs', 'v2.yaml'),
	path.join(process.cwd(), 'api-docs', 'corrections.yaml'),
)
	.then(async (f) => {
		const operations = Object.entries(
			f.paths as { [key: string]: { [key: string]: Operation } },
		).reduce(
			(ops, [path, operations]) => ({
				...ops,
				...Object.entries(operations).reduce(
					(ops, [method, def]) => ({
						...ops,
						[def.operationId]: {
							summary: def.summary,
							description: def.description,
							method,
							path,
						},
					}),
					{},
				),
			}),
			{},
		)

		console.dir(operations, { depth: 9 })
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
