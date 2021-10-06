export const sumAllNumbers = (arr) => {
  let total = 0;

  arr.forEach((val) => {
    if (typeof val === "number") {
      total += val;
    }
  });

  return total;
};

export const existsInArr = (arr, val) => {
  if (arr.includes(val)) {
    return true;
  } else {
    return false;
  }
};

export const reverseArr = (arr) => {
  return arr.reverse();
};

//export { sumAllNumbers };
