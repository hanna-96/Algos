// Given an array of n integers nums and an integer target,
// find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition
// nums[i] + nums[j] + nums[k] < target.

// Follow up: Could you solve it in O(n2) runtime?
// Example 1:

// Input: nums = [-2,0,1,3], target = 2
// Output: 2
// Explanation: Because there are two triplets which sums are less than 2:
// [-2,0,1]
// [-2,0,3]
// Example 2:

// Input: nums = [], target = 0
// Output: 0

var threeSumSmaller = function (nums, target) {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    count += twoSumHelper(nums, i + 1, target - nums[i]);
  }
  return count;
};
function twoSumHelper(arr, startIdx, target) {
  let count = 0;
  let left = startIdx;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target) {
      count += right - left;
      left++;
    } else right--;
  }
  return count;
}
//time O(n^2)
//space O(1)
// console.log("res", threeSumSmaller([-2, 0, 1, 3], 2));

//solution 2 can be solved with 3 loops O(n^3)
