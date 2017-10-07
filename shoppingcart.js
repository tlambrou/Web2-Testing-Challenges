// Shopping cart functionality


module.exports = class ShoppingCart {

  constructor() {
    this.items = []
  }

  addItem(item) {
    let contained = false

    if (this.items.length > 0) {
      //Go through each item in the cart
      for (let i = 0; i < this.items.length; i++) {
        // Check and see if the specified item is already in the shopping cart
        if (item.name in this.items[i]) {
          // If item in cart, then simply increase the quanitty by one
          this.items[i].quantity++
          contained = true
          // Otherwise add the item to the shopping cart
        }
      }
      if (contained == false) {
        // Add the quantity property to the item object
        item['quantity'] = 1
        // Add the item to the cart
        this.items.push(item)
      }
    } else {
      // Add the quantity property to the item object
      item['quantity'] = 1
      // Add the item to the cart
      this.items.push(item)
    }
  }


  firstItem() {
    return this.items[0]
  }


  remove(itemName) {
    // Go through each item in the cart
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == itemName && this.items[i].quantity > 1) {
        this.items[i].quantity = this.items[i].quantity - 1
        return
      } else if (this.items[i].name == itemName && this.items[i].quantity == 1) {
        this.items.splice(i, 1)
        return
      }
    }
    console.log("Nothing to remove")
  }

  getNames() {
    return this.items.map((item) => {
      return item.name
    })
  }

  count() {
    if (this.items.length > 0) {
      return this.items.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    } else {
      return 0
    }
  }

  cart() {
    return this.items.map((item) => {
      return item
    })
  }

  size() {
    return this.items.length
  }

  totalCost() {
    return this.items.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
  }


}
