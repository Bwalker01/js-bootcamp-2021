console.log("Session 6");

//Callback Functions
const people = ["John", "Chris", "Ben", "Lauren", "Phil"];

const looper = (argument) => {
  console.log("arg =>", argument);
};

// people.forEach(looper);

//Example

const makeDrink = (temp, callback, drink) => {
  setTimeout(() => {
    callback(console.log(`Making ${temp} ${drink}`));
  }, 3000);
};

const makeFries = () => {
  console.log("Making fries");
};

const makeBurger = () => {
  console.log("Making burger");
};

const orderMeal = () => {
  makeBurger();
  makeDrink("hot", makeFries, "coffee");
};

orderMeal();
