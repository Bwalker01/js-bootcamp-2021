class Basket {
  constructor(...items) {
    this.items = items;
    this.sum = 0;
  }

  logItems() {
    this.items.forEach((item) => {
      console.log(item);
    });
  }

  totalItems() {
    this.items.forEach((item) => {
      this.sum += item.getPrice();
    });
  }

  getTotal() {
    return this.sum;
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    if (typeof this.price === "number") {
      return this.price;
    } else {
      throw new Error(``);
    }
  }
}

const babyFood = new Item("baby food", 10);
const megaPen = new Item("mega pen", 90);
const TV = new Item("tv", 300);

let shoppingBasket = new Basket(babyFood, megaPen, TV, babyFood);

shoppingBasket.logItems();
shoppingBasket.totalItems();
console.log(shoppingBasket.getTotal());
