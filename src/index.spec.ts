import { expect } from 'chai'

import { getDeepValue } from './index'

const mockShape = {
	object: {
		value: 'foo'
	},
	array: [
		{ value: 'bar' }
	],
	number: 3,
	empty: null
}

describe('getDeepValue', () => {
	it('should return the value from an object', () => {
		const result = getDeepValue(mockShape, 'object.value')

		expect(result).to.equal('foo')
	})

	it('should return the value from an array', () => {
		const result = getDeepValue(mockShape, 'array[0].value')

		expect(result).to.equal('bar')
	})

	it('should return null if the deep value doesn\'t exist', () => {
		const result = getDeepValue(mockShape, 'nothing.value')

		expect(result).to.not.exist
	})

	it('should return a custom value on failure', () => {
		const result = getDeepValue(mockShape, 'nothing.value', 3)

		expect(result).to.equal(3)
	})

	it('should fail if a non-object is encountered', () => {
		const result = getDeepValue(mockShape, 'number.nested.value', 'fail')

		expect(result).to.equal('fail')
	})

	it('should fail if an expected object is null', () => {
		const result = getDeepValue(mockShape, 'empty.nested', 'fail')

		expect(result).to.equal('fail')
	})
})
