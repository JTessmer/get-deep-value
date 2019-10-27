const should = require('chai').should()

const getDeepValue = require('../index')

const mockShape = {
	object: {
		value: 'foo'
	},
	array: [
		{ value: 'bar' }
	],
	number: 3
}

describe('getDeepValue', () => {
	it('should return the value from an object', () => {
		getDeepValue(mockShape, 'object.value')
			.should
			.equal('foo')
	})

	it('should return the value from an array', () => {
		getDeepValue(mockShape, 'array[0].value')
			.should
			.equal('bar')
	})

	it('should return null if the deep value doesn\'t exist', () => {
		should.not.exist(
			getDeepValue(mockShape, 'nothing.value')
		)
	})

	it('should return a custom value on failure', () => {
		getDeepValue(mockShape, 'nothing.value', 3)
			.should
			.equal(3)
	})

	it('should fail if a non-object is encountered', () => {
		getDeepValue(mockShape, 'number.nested.value', 'fail')
			.should
			.equal('fail')
	})
})
