// Tests for the shpping cart module

var ShoppingCart = require('./shoppingcart').ShoppingCart

const chai = require('chai')
const should = require('should');

it('Should create a new item with name and price', () => {
  const apple = {
    price: 0.89,
    name: "apple"
  }
  var cart = new ShoppingCart()
  cart.addItem(apple)

  console.log(cart.items)
  should(cart.items[0]).have.property('name')
  should(cart.items[0]).have.property('price')
});

it('Should add a new item to the shopping cart', () => {

  const brainz = {
    price: 852.71,
    name: "brainz"
  }

  var cart = new ShoppingCart()
  const before = cart.items.length
  cart.addItem(brainz)
  const after = cart.items.length

  //Test
  after.should.equal(before + 1)

});

it('Should return the number of items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.addItem(rick)
  cart.addItem(morty)
  cart.addItem(morty)
  cart.addItem(morty)

  //Test
  cart.count.should.equal(4)

});
it('Should return an array containing all items in cart', () => {

  const apple = { price: 0.89, name: "apple" }
  const brainz = { price: 852.71, name: "brainz" }
  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.addItem(apple)
  cart.addItem(brainz)
  cart.addItem(rick)
  cart.addItem(morty)

  //Test
  cart.items.should.be.an.instanceOf(Array)

});

it('Should remove items from cart', () => {

  const apple = { price: 0.89, name: "apple" }
  const brainz = { price: 852.71, name: "brainz" }
  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.addItem(apple)
  cart.addItem(brainz)
  cart.addItem(rick)
  cart.addItem(morty)

  //Tests
  cart.items.should.have.property('rick')

  cart.remove('rick')

  cart.items.should.not.have.property('rick')

});

// Stretch challenges
it('Should update the count of items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.count.should.be.equal(0)

  cart.addItem(morty)

  cart.count.should.be.equal(1)

  cart.addItem(rick)

  cart.count.should.be.equal(2)

  cart.addItem(morty)

  cart.count.should.be.equal(3)

  cart.remove('morty')

  cart.count.should.be.equal(2)

});

it('Should remove an item when its count is 0', () => {

  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.addItem(rick)

  cart.count.should.be.equal(1)

  cart.remove('rick')

  cart.items.length.should.be.equal(0)

});

it('Should return the total cost of all items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 999999.99, name: "rick" }

  var cart = new ShoppingCart()
  cart.addItem(rick)
  cart.addItem(morty)

  cart.totalCost().should.be.equal(1000099.98)

  cart.addItem(morty)

  cart.totalCost().should.be.equal(1000199.97)

});
