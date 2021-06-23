// For this task we have 2 classes: Product and Basket.
// Add as many products as you want: each product should have a name, price and quantity.
// 1.   Display the available products in the html - include at least the name and the quantity.
// 2.   When the user clicks on one product, you should add the product to the basked (Hint: create a method in the
//      Basket class that pushes the product into the products array).
// 3.   When a user adds a product to the basket, the total quantity of this product should decrease (should this
//      be a method of the Basket or of the Product class?)
// 4.   Everytime a user adds something in its basket, show the content of the basket in the html and show the
//      decreased amount of the product.
// 5.   If a product goes to 0, show that is sold out and don't let anyone clicking on it.
// 6.   Show the total price of the basket (when a user adds something in the basket, the total should be updated).
// 7.   Apply some discount: if a user buys 4 products of the same kind, one is free.
// 8.   Add as many features as you want

class Product {
    constructor(name, price, quantity) {
       this.products = ;
      this.name = name;
      this.quantity = quantity;
  }
}

class Basket {
  constructor() {
      this.products = [];
      this.name = [];
      this.quantity = [];
  }
}

let myProducts = [
  new Product("apples", 40, 2),
  new Product("lemons", 32, 38),
  new Product("mangos", 44, 67),
  new Product("pineapples", 32, 88),
];
const displayMyProducts = (myProducts) => {
  const fruitType = document.getElementById("fruit-type");
  fruitType.innerHTML = myProducts.name;
  const remainingQuantity = document.getElementById("quantity");
  remainingQuantity.innerHTML = myProducts.quantity;
};
let basket = new Basket();
