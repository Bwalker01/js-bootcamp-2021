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
