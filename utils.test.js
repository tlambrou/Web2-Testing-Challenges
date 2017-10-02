// Contains tests for utils.js
const chai = require('chai')
const utils = require('./utils')
var expect = chai.expect

chai.should()



it('should calculate area', () => {
  // runs area test
  const result = utils.area(10, 20)
  result.should.be.equal(10 * 20)
  // if (result !== 10 * 20) {
  //   throw new Error("Expected 200 but got " + result)
  // }
})

it('should calculate perimeter', () => {
  // run perimeter test
  const result = utils.perimeter(5, 2)
  // if (result !== (5 * 2) + (2 * 2)) {
  //   throw new Error("Expected 14 but got " + result)
  // }
  expect(result).to.equal(5*2+2*2)

})
