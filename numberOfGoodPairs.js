// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

//brute force solution
//Time O(n^2);Space O(1)
var numIdenticalPairs = function (nums) {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) pairs++;
    }
  }
  return pairs;
};

//optimixed solution;
//Time O(n);Space O(1)
const numIdenticalPairs = (nums) => {
  let map = {};
  let counter = 0;

  for (val of nums) {
    !map[val] ? (map[val] = 1) : (counter += map[val]++);
  }

  return counter;
};
