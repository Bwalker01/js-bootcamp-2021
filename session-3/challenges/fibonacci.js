console.log(0);
console.log(1);
nums = [0, 1];
for (let i = 2; i < 10; i++) {
  nums.push(nums[i - 2] + nums[i - 1]);
  console.log(nums[i]);
}
