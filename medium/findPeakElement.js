// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

//solution 1 Time O(n);space O(1)
var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};

//solution 2
// Time complexity : O(log_2(n)
// We reduce the search space in half at every step. Thus, the total search space will be consumed in log_2(n)log
// steps. Here, n refers to the size of nums array.
// Space complexity : O(1). Constant extra space is used.
var findPeakElement = function (nums) {
  //   the input arr is partially sorted
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1])
      return middle;

    if (nums[middle] > nums[middle + 1]) {
      // means that after nums[middle] => everything is in descending order =>Going down already so eliminate right part and look in the left
      right = middle - 1;
    } else if (nums[middle] < nums[middle + 1]) {
      // after middle is  still ascending cycle => we're still going UP =>eliminate the left part
      left = middle + 1;
    }
  }
  return left;
};
