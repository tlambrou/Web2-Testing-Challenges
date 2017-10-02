// Tests for the shpping cart module

const chai = require('chai')

const shoppingcart = require('./shoppingcart')

it('Should create a new item with name and price', () => {
  const apple = {
    price: 0.89,
    name: "apple"
  }
  var cart = new ShoppingCart(apple)
  cart.should.have.property('name')
  cart.should.have.property('price')
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



});

// Stretch challenges
it('Should update the count of items in the cart', () => {

});

it('Should remove an item when its count is 0', () => {

});

it('Should return the total cost of all items in the cart', () => {
  
});
