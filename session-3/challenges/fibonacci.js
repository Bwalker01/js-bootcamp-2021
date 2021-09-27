console.log(0);
let nums = [0, 1];
while (nums[1] < 50) {
  console.log(nums[1]);
  nums.push(nums.shift() + nums[0]);
}
