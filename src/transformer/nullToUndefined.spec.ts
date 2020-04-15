import { nullToUndefined } from './nullToUndefined'

describe('nullToUndefined', () => {
	it('should turn undefined into undefined', () => {
		expect(nullToUndefined(undefined)).toBeUndefined()
	})
	it('should turn null into undefined', () => {
		expect(nullToUndefined(null)).toBeUndefined()
	})
	it('should return scalars as is', () => {
		expect(nullToUndefined(42)).toEqual(42)
		expect(nullToUndefined('foo')).toEqual('foo')
		expect(nullToUndefined(true)).toEqual(true)
	})
	it('should return arrays as is', () => {
		expect(nullToUndefined([42, 'foo', true])).toEqual([42, 'foo', true])
	})
	it('and convert nulls in arrays to undefined', () => {
		expect(nullToUndefined([42, 'foo', null, true])).toEqual([
			42,
			'foo',
			undefined,
			true,
		])
	})
	it('should return objects', () => {
		expect(
			nullToUndefined({
				foo: 'bar',
			}),
		).toEqual({
			foo: 'bar',
		})
	})
	it('and convert nulls in array object values to undefined', () => {
		expect(
			nullToUndefined({
				foo: 'bar',
				baz: [42, 'foo', null, true],
			}),
		).toEqual({
			foo: 'bar',
			baz: [42, 'foo', undefined, true],
		})
	})
	it('and convert nulls in object values to undefined', () => {
		expect(
			nullToUndefined({
				foo: 'bar',
				baz: null,
			}),
		).toEqual({
			foo: 'bar',
		})
	})
	it('and handle children', () => {
		expect(
			nullToUndefined({
				foo: 'bar',
				baz: {
					foo: 'bar',
					baz: null,
				},
			}),
		).toEqual({
			foo: 'bar',
			baz: {
				foo: 'bar',
			},
		})
	})
})
