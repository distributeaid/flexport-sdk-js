import { createClient } from '../'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

const handleError = (err: Error) => {
	console.error(err)
	process.exit(1)
}

// Fetch all shipments
pipe(
	client.listAllShipments(),
	TE.map(shipments => {
		console.dir(shipments, { depth: 5 })
	}),
)().catch(handleError)
