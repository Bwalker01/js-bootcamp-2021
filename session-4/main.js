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
  lions: ["Leo"],
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
const allBears = zoo?.getBears?.() || "There are no bears in the zoo";
console.log(allBears);

// ============== SCOPE ==============
let num = 1;

if (num > 0) {
  let num = 2;
  console.log("Num inside is", num);
}

console.log("Num outside is", num);

//Defining again inside a code block will make it local to that

if (num) {
  num = 3;
}

console.log("Num is now", num);

//Defining outside and referencing inside is still allowed and will use the outside version

const num2 = 1;

if (num2) {
  const num2 = 2;
  console.log("Const inside is", num2);
}

console.log("Const outside is", num2);

//Const works the same way but cannot be changed (constant)
