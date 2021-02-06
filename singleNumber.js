// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
    else set.delete(nums[i]);
  }

  return Array.from(set)[0];
};
