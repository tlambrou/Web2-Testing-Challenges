// Tests for the shpping cart module

var ShoppingCart = require('./shoppingcart')

const expect = require('chai').expect

it('Should create a new item with name and price', () => {
  const apple = {
    price: 0.89,
    name: "apple"
  }
  var cart = new ShoppingCart()
  cart.addItem(apple)

  // Test
  expect(cart.firstItem()).to.have.keys('name', 'price', 'quantity')
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

  // Test
  expect(after).to.equal(before + 1)

});

it('Should return the number of items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  cart.addItem(rick)
  cart.addItem(morty)
  cart.addItem(morty)
  cart.addItem(morty)

  // Test
  expect(cart.count()).to.equal(4)

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

  // Test
  expect(cart.cart()).to.be.an('array')

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

  // Tests
  expect(cart.getNames()).to.include.members(['rick'])

  cart.remove('rick')

  expect(cart.getNames()).to.not.include.members(['rick'])

});

// Stretch challenges
it('Should update the count of items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 99999999999.99, name: "rick" }

  // Tests
  var cart = new ShoppingCart()
  expect(cart.count()).to.equal(0)

  cart.addItem(morty)
  expect(cart.count()).to.equal(1)

  cart.addItem(rick)
  expect(cart.count()).to.equal(2)

  cart.addItem(morty)
  expect(cart.count()).to.equal(3)

  cart.remove('morty')
  expect(cart.count()).to.equal(2)

});

it('Should remove an item when its count is 0', () => {

  const rick = { price: 99999999999.99, name: "rick" }

  var cart = new ShoppingCart()

  // Tests
  cart.addItem(rick)
  expect(cart.count()).to.equal(1)

  cart.remove('rick')
  expect(cart.size()).to.equal(0)

});

it('Should return the total cost of all items in the cart', () => {

  const morty = { price: 99.99, name: "morty" }
  const rick = { price: 999999.99, name: "rick" }

  var cart = new ShoppingCart()
  cart.addItem(rick)
  cart.addItem(morty)

  // Tests
  expect(cart.totalCost()).to.equal(1000099.98)

  cart.addItem(morty)

  expect(cart.totalCost()).to.equal(1000199.97)

});
