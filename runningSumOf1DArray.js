// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Time O(n),Space O(n)
var runningSum = function (nums) {
  let runningSum = nums[0];
  let res = []; //[1,2,6]
  res[0] = runningSum;
  for (let i = 1; i < nums.length; i++) {
    runningSum += nums[i];
    res[i] = runningSum;
  }
  return res;
};
//fancy solution
const runningSum = (nums) => {
  nums.reduce((a, c, i, arr) => (arr[i] += a));
  return nums;
};

//Time O(n),Space O(1); in place
var runningSum = function (nums) {
  let runningSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    runningSum += nums[i];
    nums[i] = runningSum;
  }
  return nums;
};
