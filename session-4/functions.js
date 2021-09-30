// ============= Functions ================

//Methods are functions built into the language already
//Functions are created by the user

//Func Declaration - defining the function and it's procedure and output
function sayMessage() {
  console.log("Hello");
}

//Func Invoking - calling on the function to complete its task
sayMessage();

//Function Expression - functions as variables
const sayAnotherMessage = function () {
  console.log("This is another hello");
};
sayAnotherMessage();

// ---Shortened---
const oneMoreMessage = () => {
  console.log("This is one last hello");
};
oneMoreMessage();

// HOISTING - Holds onto any function so it can be invoked even before its assignment
//This only works for declared functions and NOT function expressions

//Immediate invoke

(function () {
  console.log("This anonymous function will immediately run.");
})();

//With Parameters
let fName = "Ben";

(function (name) {
  console.log("Hello there,", name, ".");
})(fName);

//Parameters is what variables the declaration states the function takes
//Arguments are what is passed to the function when its invoked

function addFive(num) {
  return num + 5; //Return the value stated into a variable then the function is invoked
}
console.log(addFive(3));

// ---OR---

addFour = (num) => num + 4;
console.log(addFour(3));

const formatPerson = (firstName, lastName, age, dob, address, hobbies) => {
  //This is too long
  console.log("");
};
//The parameters should be consolidated in an object
//-->
const formattedPerson = (personObj) => {
  const { firstName, lastName, age, dob, address, hobbies } = personObj;
  return {
    name: `${firstName} ${lastName}`,
    city: address.city,
    hobbies: hobbies,
  };
};

person = {
  firstName: "Ben",
  lastName: "Walker",
  age: 18,
  dob: "29/10/2002",
  address: {
    street: "1 Main Street",
    city: "London",
    postCode: "L1 5TB",
  },
  hobbies: ["Programming", "Eating", "Watching Netflix"],
};
relative = formattedPerson(person);
console.log(relative);

//SRP --Single Responsibility Principle (Only write a function to do one thing and keep functions seperate)
//KISS --Keep It Simple Stupid (Simplify the code as much as possible)
//DRY --Don't Repeat Yourself (Use functions rather than writing the same code repeatedly)

//========= EXTRA ========
//Declaration (Global)
function debitAccount(account, amount) {
  account.total += amount;
  return account;
}

//Invoke
const account = {
  total: 0,
};
const amount = 100;

const updatedAccount = debitAccount(account, amount);
console.log(updatedAccount);

//Function Expression
const greet = function (message) {
  return `Hello ${message}`;
};

console.log(greet("loser"));

//Function Expression as Arrow
const messageRenderer = (message) => `Hello ${message}`;

console.log(messageRenderer(messageRenderer("Hello")));

//Functions with default values
const makeCoffee = (
  coffeeType = "americano",
  coffeeOptions = {
    hasMilk: false,
    hasSugar: true,
    toppings: [],
  }
) => {
  console.log(
    `Coffee ${coffeeType}, Coffee Options ${JSON.stringify(coffeeOptions)}`
  );
  let coffeeMessage = "";
  if (coffeeType === "cappucino" || coffeeType === "americano") {
    coffeeOptions.toppings.forEach(function (topping) {
      coffeeMessage += `added ${topping}, `;
    });
    coffeeColour = coffeeOptions.hasMilk ? "" : "black ";
    coffeeMessage += `Enjoy your ${coffeeColour}${coffeeType}`;
  } else {
    coffeeMessage = "Sorry we do not sell" + coffeeType;
  }
  return coffeeMessage;
};

const coffeeType = "cappucino";
const coffeeOptions = {
  toppings: ["vanilla", "cream"],
  hasMilk: true,
};

console.log(makeCoffee());
