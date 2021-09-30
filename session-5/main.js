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
