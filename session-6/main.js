/*
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
    console.log(`Making ${temp} ${drink}`);
    callback(temp); //The callback will be called to signify the previous code is done.
  }, 3000);
};

const makeFries = (temp) => {
  console.log(`Making ${temp} fries`); //The callback in makeDrink passes the temp down the makeFries function
};

const makeBurger = () => {
  console.log("Making burger");
};

const orderMeal = () => {
  makeBurger();
  makeDrink("hot", makeFries, "coffee"); //makeFries is given as the callback so will be run when callback is called.
};

orderMeal();

*/

document
  .querySelector("#fruitsId")
  .addEventListener("change", function (event) {
    const selectedValue = event.target.value;

    if (selectedValue !== "-1") {
      console.log(selectedValue);
    }
  });
