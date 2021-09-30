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
