import * as fs from 'fs'
import * as path from 'path'

const emptyPage = {
	_object: '/api/response',
	self:
		'https://api.flexport.com/shipments?page=1&per=20&sort=id&direction=desc',
	version: 2,
	data: {
		_object: '/api/collections/paginated',
		prev: null,
		next: null,
		data: null,
	},
	error: null,
}

export const emptyPageMock = () =>
	jest.fn(async () =>
		Promise.resolve({
			status: 200,
			json: async () => emptyPage,
		}),
	)

export const shipment = JSON.parse(
	fs
		.readFileSync(path.join(process.cwd(), 'src', 'testdata', 'shipment.json'))
		.toString(),
)
export const shipmentMock = () =>
	jest.fn(async () =>
		Promise.resolve({
			status: 200,
			json: async () => shipment,
		}),
	)
