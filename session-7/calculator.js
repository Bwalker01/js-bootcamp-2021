function add(...nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Can't divide by 0!");
  }
  return num1 / num2;
}

// console.log(add(1, 2, 3));
module.exports = {
  add,
  divide,
};
