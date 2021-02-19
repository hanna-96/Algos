// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

//Time O(n),space O(n);
const pivotIndex = (nums) => {
  let leftSum = [];
  let leftSumCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum[i] = leftSumCounter;
    leftSumCounter += nums[i];
  }

  let rightSum = [];
  let rightSumCounter = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum[i] = rightSumCounter;
    rightSumCounter += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (rightSum[i] === leftSum[i]) return i;
  }
  return -1;
};
//optimal solution
//Time O(n), space O(1)
const pivotIndex = (nums) => {
  let sum = nums.reduce((cur, sum) => sum + cur, 0); //28
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum = sum - leftSum; //28 27 20 17
    leftSum += nums[i]; //1 8 11 17;
    if (rightSum === leftSum) return i;
  }
  return -1;
};
