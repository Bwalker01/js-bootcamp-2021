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
  };
};

//SRP --Single Responsibility Principle (Only write a function to do one thing and keep functions seperate)
//KISS --Keep It Simple Stupid (Simplify the code as much as possible)
//DRY --Don't Repeat Yourself (Use functions rather than writing the same code repeatedly)
