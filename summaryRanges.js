// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// Time O(n), Space O(1)
var summaryRanges = function (nums) {
    const res = [];
  
    let curStr = "";
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1] - 1) {
        if (nums[start] === nums[i]) curStr = `${nums[i]}`;
        else curStr = `${nums[start]}->${nums[i]}`;
        res.push(curStr);
        start = i + 1;
      }
    }
    return res;
  };
  