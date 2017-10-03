// Shopping cart functionality


module.exports.ShoppingCart = class ShoppingCart {

  constructor() {
    // Initialize items array
    this.items = []
    // // Add the quantity property to the item object
    // item['quantity'] = 1
    // // Add the initial item to the cart
    // this.items.append(item)
  }

  addItem(item) {

    //Go through each item in the cart
    this.items.map((i) => {
      // Check and see if the specified item is already in the shopping cart
      if (item.name in i) {
        // If item in cart, then simply increase the quanitty by one
        i.quantity++
        return i
      // Otherwise add the item to the shopping cart
      } else {
        // Add the quantity property to the item object
        item['quantity'] = 1
        // Add the item to the cart
        this.items.append(item)
      }
    })
  }

  remove(itemName) {
    var contained = false
    // Go through each item in the cart
    this.item.map((i, index) => {
      if (i.name == itemName && i.quantity == 1) {
        this.item.splice(index, 1)
        contained = true
      } else if (i.name == itemName && i.quanity > 1) {
        i.quantity--
      }
    })

    if (contained == false) {
      console.log("Nothing to remove")
    }

  }

  totalCost() {
    return this.item.reduce((acc, item) => {
      acc += (item.price * item.quantity)
    })
  }


}
