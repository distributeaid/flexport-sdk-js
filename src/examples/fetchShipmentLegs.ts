import { createClient } from '../createClient'
import * as TE from 'fp-ts/lib/TaskEither'
import { pipe } from 'fp-ts/lib/pipeable'

const client = createClient({ apiKey: process.env.FLEXPORT_API_KEY || '' })

pipe(
	client.listAllShipments(),
	TE.map(shipments => {}),
)
