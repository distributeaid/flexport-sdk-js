import { headers } from './headers'

describe('headers', () => {
	it('should generate headers object', () => {
		expect(headers({ apiKey: 'foo' })).toEqual({
			Authorization: 'Bearer foo',
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Flexport-Version': 2,
		})
	})
})
