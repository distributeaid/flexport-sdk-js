import { v2Client } from './v2Client'
import { requestHandler } from '@distributeaid/flexport-api-sandbox'
import * as http from 'http'
import * as path from 'path'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import { Type, liftDocument, liftShipment } from './generated'
import { ErrorInfo, ErrorType } from './types/ErrorInfo'
import { emptyPageMock, mockHeaders } from './testmocks'
import { promises as fs } from 'fs'
import { linkObject, linkCollection } from './links'
import { isLeft, Left } from 'fp-ts/lib/Either'
import { paginate } from './paginate'

const port = 3000
const hostname = `http://0.0.0.0:${port}`
const apiKey = 'foo'

describe('v2Client', () => {
	let server: http.Server
	beforeAll(() => {
		server = http.createServer(requestHandler({ hostname, apiKey }))
		server.listen(port)
	})
	afterAll(() => {
		server.close()
	})
	it('can be created', () => {
		const client = v2Client({
			apiKey,
			endpoint: hostname,
		})
		expect(client).toBeDefined()
	})
	it('sends the right headers', async () => {
		const fetchMock = emptyPageMock()
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})

		await pipe(client.shipment_index())()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/shipments',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer some-api-key',
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Flexport-Version': 2,
				},
			},
		)
	})
	it('resolves collection links', async () => {
		const documentsLink = linkCollection({
			_object: Type.CollectionRef,
			ref_type: '/document',
			link: 'https://api.flexport.com/documents?f.shipment.id=685551',
		})

		const fetchMock = emptyPageMock()
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(documentsLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveCollection(liftDocument)),
		)()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/documents?f.shipment.id=685551',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer some-api-key',
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Flexport-Version': 2,
				},
			},
		)
	})

	it('resolves object links', async () => {
		const shipmentLink = linkObject({
			_object: Type.ObjectRef,
			ref_type: '/shipment',
			link: 'https://api.flexport.com/shipments/685551',
			id: 685551,
		})

		const fetchMock = jest.fn(async () =>
			Promise.resolve({
				status: 200,
				headers: mockHeaders(),
				json: async () =>
					JSON.parse(
						(
							await fs.readFile(
								path.join(
									process.cwd(),
									'node_modules',
									'@distributeaid/flexport-api-sandbox',
									'sandbox',
									'shipments',
									'685551.json',
								),
							)
						).toString(),
					),
			}),
		)
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		await pipe(
			TE.right(shipmentLink),
			TE.chain(TE.fromOption(() => (undefined as unknown) as ErrorInfo)),
			TE.chain(client.resolveObject(liftShipment)),
		)()
		expect(fetchMock).toHaveBeenCalledWith(
			'https://api.flexport.com/shipments/685551',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer some-api-key',
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Flexport-Version': 2,
				},
			},
		)
	})
	it('can fetch shipments', async () => {
		const client = v2Client({
			apiKey,
			endpoint: hostname,
		})
		expect.assertions(1)
		return pipe(
			client.shipment_index(),
			TE.map((shipments) => {
				expect(shipments.items).toHaveLength(10)
			}),
		)()
	})
	it('can fetch shipments by id', async () => {
		const client = v2Client({
			apiKey,
			endpoint: hostname,
		})
		expect.assertions(1)
		return pipe(
			client.shipment_show({ id: 253590 }),
			TE.map((shipment) => {
				expect(shipment.name).toEqual('LCL Test Shipment')
			}),
		)()
	})
	it('can fetch shipment containers by id', async () => {
		const client = v2Client({
			apiKey,
			endpoint: hostname,
		})
		expect.assertions(1)
		return pipe(
			client.container_show({ id: 125230 }),
			TE.map((container) => {
				expect(container.container_number).toEqual('UACU8059492')
			}),
		)()
	})
	it('can handle invalid responses', async () => {
		const fetchMock = jest.fn(async () =>
			Promise.resolve({
				status: 200,
				headers: mockHeaders(),
				json: async () => ({}),
			}),
		)
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		const res = await pipe(
			client.container_show({ id: 125230 }),
			TE.map(() => {
				fail('This should not be called')
			}),
		)()
		expect(isLeft(res)).toBeTruthy()
		expect((res as Left<ErrorInfo>).left.type).toEqual(
			ErrorType.INTEGRATION_ERROR,
		)
		expect((res as Left<ErrorInfo>).left.message).toEqual(
			'Expected "/api/response", received: "undefined"!',
		)
	})
	it('can handle not found', async () => {
		const fetchMock = jest.fn(async () =>
			Promise.resolve({
				status: 404,
				text: async () => 'NOT FOUND',
			}),
		)
		const client = v2Client({
			apiKey: 'some-api-key',
			fetchImplementation: fetchMock,
		})
		const res = await pipe(
			client.container_show({ id: 125230 }),
			TE.map(() => {
				fail('This should not be called')
			}),
		)()
		expect(isLeft(res)).toBeTruthy()
		expect((res as Left<ErrorInfo>).left.type).toEqual(
			ErrorType.INTEGRATION_ERROR,
		)
		expect((res as Left<ErrorInfo>).left.message).toEqual(
			'Encountered error 404 when GETing https://api.flexport.com/ocean/shipment_containers/125230: NOT FOUND!',
		)
	})
	it('paginates', async () => {
		const client = v2Client({
			apiKey,
			endpoint: hostname,
		})
		expect.assertions(1)
		return pipe(
			client.shipment_index(),
			TE.chain(paginate(client.resolvePage(liftShipment))),
			TE.map((shipments) => {
				expect(shipments).toHaveLength(126)
			}),
		)()
	})
})
