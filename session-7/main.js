// ===== Pure Functions ====
const add = (num1, num2) => {
  const total = num1 + num2;
  return total;
};
console.log(add(5, 5));

const nonPure = (num1, num2) => {
  const total = num1 + num2 + Math.random();
  return total;
};
