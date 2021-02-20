// Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.
// Example 1:

// Input: nums = [4,7,9,10], k = 1
// Output: 5
// Explanation: The first missing number is 5.
// Example 2:

// Input: nums = [4,7,9,10], k = 3
// Output: 8
// Explanation: The missing numbers are [5,6,8,...], hence the third missing number is 8.

var missingElement = function (nums, k) {
  let set = new Set();

  for (let num of nums) {
    set.add(num);
  }

  let found = 0;
  for (let i = 0; i < nums.length; i++) {
    let next = nums[i] + 1;

    while (!set.has(next) && found < k) {
      set.add(next);
      next++;
      found++;
    }

    if (found === k) return next - 1;
  }
};
//optimal solution
//Time O(log n);pace O(1)
var missingElement = function (nums, k) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numMissing(mid, nums) < k) left = mid + 1;
    else right = mid;
  }
  return nums[left - 1] + k - numMissing(left - 1, nums);
};
//will return how many numbers are missing before current number
function numMissing(i, nums) {
  return nums[i] - nums[0] - i;
}
