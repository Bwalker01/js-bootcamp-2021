import {
  existsInArr,
  sumAllNumbers,
  reverseArr,
  Car,
} from "./array-functions.js";

const arr = [1, 5, 8, 5, 4, 7];

console.log(sumAllNumbers(arr));

console.log(existsInArr([arr], 5));

console.log(reverseArr(arr));

console.log(new Car("V8", "Fiesta", "Ford"));
