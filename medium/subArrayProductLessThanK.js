// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

//Brute force approach
//Time O(n^2); Space O(1)
var numSubarrayProductLessThanK = function (nums, k) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < k) total++;
      let product = nums[i]; // 5
      for (let j = i + 1; j < nums.length; j++) {
        product *= nums[j]; //50
        if (product < k) {
          total++;
        } else break;
      }
    }
    return total;
  };


// Optimal sliding window approach
//Time O(n), SPace O(1)
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;
    let total = 0;
    let start = 0;
    let end = 0;
    let product = 1;
    while (start < nums.length && end < nums.length) {
      if (product * nums[end] < k) {
        product *= nums[end]; //5 * 2  * 6
        total += end - start + 1; //3 + 2 + 3
        end++;
      } else {
        product /= nums[start];
        start++;
      }
    }
    return total;
  };
  