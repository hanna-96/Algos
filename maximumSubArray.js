// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1

var maxSubArray = function (nums) {
  //find the numbers that will produce the largest sum eventually
  // nums = [-2,1,-3,4,-1,2,1,-5,4]
  let currentMaxSubArr = nums[0];
  let globaMaxSubArr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums.length === 1) return nums[i];
    let potentialMaxSum = currentMaxSubArr + nums[i];
    //in terms of the current sub array would it be better if we have just -2 or
    //will it be better if we add the next element(1)
    if (currentMaxSubArr + nums[i] < nums[i]) {
      //here its better to move on to a new element(it'll be higher)
      currentMaxSubArr = nums[i];
    } else {
      currentMaxSubArr = currentMaxSubArr + nums[i];
    }
    //update the globalMaxSubArr (maximum sum) every time when its less then the previous
    if (currentMaxSubArr > globaMaxSubArr) globaMaxSubArr = currentMaxSubArr;
  }
  return globaMaxSubArr;
};
