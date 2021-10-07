export const addAllNumbers = (arr) => {
  let total = 0;

  arr.forEach(function (item) {
    if (typeof item === "number") {
      total += item;
    }
  });
  return total;
};

export const divideNumbers = (num1, num2) => {
  if (num1 === 0) {
    throw new Error("Can't divide by 0");
  }
  return num2 / num1;
};
