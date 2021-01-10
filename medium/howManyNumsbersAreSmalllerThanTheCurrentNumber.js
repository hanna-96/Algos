// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
//That is, for each nums[i] you have to count the number
// of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
//brute force solution
//Time O(n^2);SPace O(n)
var smallerNumbersThanCurrent = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    res[i] = count;
  }
  return res;
};

//optimized solution
//Time O(n log n);Space O(n)

var smallerNumbersThanCurrent = function (nums) {
  let copy = [...nums];
  copy.sort((a, b) => a - b); //[1,2,2,3,8]
  let map = new Map();
  //the num at the last index will be larger then all the nums at previous indexes(copy.length-1 - 0) and so on...
  for (let i = 0; i < copy.length; i++) {
    if (!map.has(copy[i])) {
      map.set(copy[i], i);
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = map.get(nums[i]);
  }
  return res;
};
