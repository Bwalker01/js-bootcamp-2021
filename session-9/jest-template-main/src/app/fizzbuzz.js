// Write a program which return "fizz" if the number is a multiple of 3, return "buzz" if its multiple of 5 and return "fizzbuzz" if the number is divisible by both 3 and 5.
// If the number is not divisible by either 3 or 5 then it should just return the number itself.
// Bonus:
// Enhance your program to print out the outcome if provided a range of numbers 1 to 20. For example it should print:
// 1 2 fizz 4 buzz fizz ...

export const fizzBuzz = (num) => {
  let result = "";

  if (Math.abs(num) % 3 === 0) {
    result += "fizz";
  }

  if (Math.abs(num) % 5 === 0) {
    result += "buzz";
  }

  if (result === "") {
    result = num.toString();
  }

  return result;
};

export const giveArray = (start, end) => {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("Inputs must be numbers");
  }

  if (end < start) {
    throw new Error("End must be higher than the start");
  }

  const repeats = end - start;
  let arr = [];
  for (let i = start; i < repeats + start + 1; i++) {
    arr.push(fizzBuzz(i));
  }
  return String(arr.join(" "));
};
