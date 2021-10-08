import { ShoppingBasket } from "./basket";

describe.skip("Shopping Basket: ", () => {
  let shoppingBasket; //Letting this be used within the scope of this 'Describe' block

  beforeEach(() => {
    //Logic to run before each test within this block (setup)
    shoppingBasket = new ShoppingBasket();
  });

  test("Should initialise with zero items", () => {
    //Testing within given parameters

    expect(shoppingBasket.items.length).toBe(0);
  });

  test("Should add item to shopping basket", () => {
    //Arrange
    const item = "Apples";

    //Act
    shoppingBasket.addItems(item);

    //Assert
    expect(shoppingBasket.items.length).toBe(1); //Tests that the length is only one
    expect(shoppingBasket.items).toContain(item); //Tests that it contains the word 'Apple'
  });

  test("Should remove item from basket", () => {
    shoppingBasket.addItems("Board");
    expect(shoppingBasket.items).toContain("Board");
    shoppingBasket;
  });

  afterEach(() => {
    //Code to run after each test is completed
    shoppingBasket = null; //Resets the variable each time (teardown)
  });
});
