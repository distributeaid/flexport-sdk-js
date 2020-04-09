import { createClient } from '..'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'
import { handleError } from './handleError'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

pipe(
	client.listAllShipments(),
	TE.map(shipments => {
		console.dir(shipments, { depth: 5 })
	}),
)().catch(handleError)
