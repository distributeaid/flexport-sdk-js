import * as fs from 'fs'
import * as path from 'path'

export const emptyPageMock = () =>
	jest.fn(() => ({
		status: 200,
		json: async () => ({
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
		}),
	}))

const shipment = JSON.parse(
	fs
		.readFileSync(path.join(process.cwd(), 'testdata', 'shipment.json'))
		.toString(),
)
export const shipmentMock = () =>
	jest.fn(() => ({
		status: 200,
		json: async () => shipment,
	}))
