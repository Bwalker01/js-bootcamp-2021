//Error Handling

const divideNumbers = (first, second) => {
  if (second === 0) {
    throw new Error("Can't divide by Zero!");
  }
  return first / second;
};

const divideNum = (a, b) => {
  c = a / b;
  if (c && c != Infinity) {
    return c;
  } else {
    throw new Error(`Couldn't divide ${a} by ${b}`, { cause: c });
  }
};

try {
  console.log("divideNumbers =>", divideNum(2, "Apple"));
} catch (err) {
  value = 0;
  console.error(`${err.message} -- ${err.cause}`);
}

const returnNum = (param) => {
  try {
    check(param);
    return param;
  } catch (err) {
    console.error(`${err.message} ---- ${err.cause}`);
  }
};

const check = (param) => {
  if (typeof param !== "number") {
    throw new Error("Parameter isn't a number.", { cause: param });
  }
};

g = returnNum("T");
console.log(g);

//More Object Configuration

const createPerson = (firstName, lastName, ...details) => {
  console.log(`firstName: ${firstName}, details: ${details}`, details);
};

createPerson("John", "Wick", "London", "0113 768538", "L1 5PX");

// ============ Spread Operator ================

// Deep and Shallow Copy
// Shallow copy - changes everything about the variable saved under both names
// Deep copy - take the contents of the variable and saves it elsewhere
const numbers = [0, 1, 2, 3];
const copyOfNumbers = numbers; //Shallow copy

copyOfNumbers[0] = 99; //Both numbers and copyOfNumbers are changed

console.log("Numbers => ", numbers);
console.log("copyOfNumbers =>", copyOfNumbers);

//Copy with spread operator
const copyOfNumbersES6 = [...numbers]; //Deep copy
copyOfNumbersES6[0] = 77; // Only copyOfNumbersES6 is changed
console.log("Numbers => ", numbers);
console.log("copyOfNumbersES6 =>", copyOfNumbersES6);

// ---With Objects

const person = {
  name: "John",
  address: {
    places: ["A", "B"],
    coordinates: {
      long: 99,
      lat: 88,
    },
  },
};
const copiedPerson = { ...person };

copiedPerson.name = "Foo";
console.log(person);
console.log(copiedPerson);

// At a higher level in the nested objects it will make a shallow copy
copiedPerson.address.places.push("C");

console.log(person);
console.log(copiedPerson);

address = { ...copiedPerson.address };
console.log(address);
