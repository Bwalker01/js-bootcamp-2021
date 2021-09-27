const currentWeather = "raining";
const isHappy = "raining" !== currentWeather;
console.log(isHappy);

//For Loop
for (let i = 0; i < 100; i++) {
  console.log(i);
}

const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
  console.log(nums);
  nums[i] = nums[i] * 2;
}

console.log(nums);

//INFINITE LOOP:
/* for (;;) {
  console.log("Hi");
} */

// let ovenOn = true;
// let time = 0;

// while (ovenOn) {
//   if (time === 10000) {
//     ovenOn = false;
//     console.log("Finished baking.");
//   } else {
//     console.log(10000 - time, "loops left.");
//     time += 1;
//   }
// }
condition = false;
if (condition) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}

// let num = 47;
// if (num < 20) {
//   console.log("num is low");
// } else if (num < 50) {
//   console.log("num is medium");
// } else if (num < 70) {
//   console.log("num is high");
// } else {
//   console.log("num is very high");
// }

rateNum = () => {
  const num = document.getElementById("textbox").value;
  num < 20
    ? console.log("low")
    : num < 50
    ? console.log("medium")
    : num < 70
    ? console.log("high")
    : console.log("very high");
};

// Switch Statements
const coinInserted = 50;

switch (coinInserted) {
  case 50:
    console.log("Inserted 50p");
    break;
  case 100:
    console.log("Inserted £1.00");
    break;
  default:
    console.log("This machine only accepts 50p and £1");
}

switch (coinInserted) {
  case 20:
  case 50:
  case 100:
    console.log(`Inserted ${coinInserted}`);
    break;
  default:
    console.log("That coin isnt accepted");
}
