// Given an integer array nums sorted in non-decreasing order,
//return an array of the squares of each number sorted in non-decreasing order.
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

//brute force solution
// Time O(n log n); Space O(N)
var sortedSquares = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    res[i] = nums[i] * nums[i];
  }
  return res.sort((a, b) => a - b);
};

//more optimal solution
// Time O(n); space O(1)
var sortedSquares = function (nums) {
  let res = [];
  let start = 0;
  let end = nums.length - 1;
  let i = end;
  //we will build the result array from the end
  while (start <= end) {
    let square1 = nums[start] * nums[start];
    let square2 = nums[end] * nums[end];

    if (square1 < square2) {
      //or
      // res.unshift(square2);
      res[i] = square2;
      end--;
    } else {
      res[i] = square1;
      //or
      // res.unshift(square1);
      start++;
    }
    i--; //we need to decrement i because we don't always move p2—
  }
  return res;
};
