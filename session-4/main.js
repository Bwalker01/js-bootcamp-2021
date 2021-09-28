// ================ RECAP STUFF ================
//Destructuring
//Arrays can call it whatever, but will always take the first item
const numbers = [1, 2, 3];

const [firstNumber] = numbers;
console.log("firstNumber: ", firstNumber);

//Objects must give the item being extracted but can assign an alias
const person = {
  name: "Jill Smith",
  age: 23,
  address: {
    street: "First Street",
    city: "London",
    postCode: "L1 5TC",
  },
};

const { name: fullName } = person;
console.log(fullName);
const {
  address: { street: streetName },
} = person;
console.log(streetName);

//If statements
let value;

if (value != null) {
  console.log("Its not null");
}
// -----OR------
if (value) {
  console.log("It has a value");
} else {
  console.log("It doesnt have a value");
}

//Operators
let count = 0;
let text = "";

let qty = count || 42;
console.log(qty);
let theText = text || "It was empty";
console.log(theText);

//If first given variable isn't there it will give the other value
// || checks for 0, "", NaN, null or undefined and will treat these the same

//Coalesce Operator
let variable;
let food = variable ?? "There is no food";
console.log(food);

// Chaining Operator (Optional Chaining)
const zoo = {
  lions: ["leo"],
  zooKeeper: ["Brenda"],
  bears: ["Jackson"],
  describe() {
    return `${this.lions[0]} is looked after by ${this.zooKeeper[0]}`;
  },
};
const leo = zoo.lions[0];
console.log(leo);

const bungleTheBear = zoo?.bears?.[0];
console.log(bungleTheBear);
const nemo = zoo?.fish?.[0];
console.log(nemo);

const des = zoo?.describe?.();
console.log(des);
const getBears = zoo?.giveBears?.() || "There are no bears in the zoo";
console.log(getBears);
