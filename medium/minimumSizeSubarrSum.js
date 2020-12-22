// Given an array of n positive integers and a positive integer s,
// find the minimal length of a contiguous subarray of which the sum ≥ s.
//  If there isn't one, return 0 instead.
// Example:

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

// Time O(n);Space O(1)
var minSubArrayLen = function (s, nums) {
  let start = 0;
  let end = 0;
  let curSum = 0;
  let length = Infinity;

  while (end < nums.length) {
    curSum += nums[end];
    //         once our sum becomes >= s , let's try to find the minimum subarr
    while (curSum >= s) {
      length = Math.min(length, end - start + 1);
      curSum -= nums[start]; //try to make the current subarray shorter and see if curSum is still >= s
      start++; //forget the 1st el in the subarr
    }
    end++;
  }
  return length === Infinity ? 0 : length;
};
