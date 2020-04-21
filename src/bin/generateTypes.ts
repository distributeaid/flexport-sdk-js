import { promises as fs } from 'fs'
import * as path from 'path'
import { parseOpenAPI } from '../generator/parseOpenAPI'
import { printNode } from '../generator/printNode'
import {
	makeType,
	makeImport,
	makeTypes,
	makeIndex,
} from '../generator/factories'

const ApiTypes = {
	CollectionRef: '/api/refs/collection',
	ObjectRef: '/api/refs/object',
	Error: '/api/error',
	Page: '/api/collections/paginated',
	Response: '/api/response',
} as const

const TypesById = Object.entries(ApiTypes).reduce(
	(t, [k, v]) => ({ ...t, [v]: k }),
	{} as { [key: string]: string },
)

parseOpenAPI(
	path.join(process.cwd(), 'api-docs', 'v2.yaml'),
	path.join(process.cwd(), 'api-docs', 'corrections.yaml'),
)
	.then(async (f) => {
		// Generate Types
		const typeIdentifiers: Map<string, string> = new Map()
		Object.entries(ApiTypes).forEach(([k, v]) => typeIdentifiers.set(k, v))
		const types: string[] = []
		await Promise.all(
			Object.entries(f.components.schemas as { [key: string]: any }).map(
				async ([name, schema]) => {
					const { type, deps } = makeType(name, schema, TypesById)
					const nodes = [
						...deps.map((dep) => printNode(makeImport(dep))),
						printNode(type),
					]
					const _object = schema?.properties?._object?.example
					if (_object) typeIdentifiers.set(name, _object)
					types.push(name)
					return fs.writeFile(
						path.join(process.cwd(), 'src', 'generated', `${name}.ts`),
						nodes.join('\n'),
						'utf8',
					)
				},
			),
		)
		// Write Type.ts
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'Type.ts'),
			printNode(makeTypes(typeIdentifiers)),
			'utf8',
		)
		// Write index.ts
		await fs.writeFile(
			path.join(process.cwd(), 'src', 'generated', 'index.ts'),
			[...types, 'Type'].map(makeIndex).map(printNode).join('\n'),
			'utf8',
		)
	})
	.catch((err) => {
		console.error(err)
		process.exit(1)
	})
