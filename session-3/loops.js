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

let ovenOn = true;
let time = 0;

while (ovenOn) {
  if (time === 10000) {
    ovenOn = false;
    console.log("Finished baking.");
  } else {
    console.log(10000 - time, "loops left.");
    time += 1;
  }
}
