// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

// Optimal solution Time O(n); Space O(1);
function maxProduct(nums) {
  let max1 = -Infinity;
  max2 = -Infinity;
  max3 = -Infinity;
  min1 = Infinity;
  min2 = Infinity;

  for (let num of nums) {
    if (num >= max1) {
      //num is > then max1,max2,max3
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num >= max2) {
      //num is > max2 and max3
      max3 = max2;
      max2 = num;
    } else if (num >= max3) {
      //num>max3
      max3 = num;
    }
    //fetch min
    if (num <= min1) {
      min2 = min1;
      min1 = num;
    } else if (num <= min2) {
      min2 = num;
    }
  }
  // return max of top 3, or top1 and last 2
  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
}

//solution 2 (Time O(n log n); Space O(n log n))
const maxProduct = (nums) => {
  nums = nums.sort((a, b) => a - b);
  //     after sorting =>the largest product will be product of three last numbers (the largest);
  //     BUT if the arr consists of negative integers=> we multiply the first two smallest(because they're negative) (- * - ===+) and the last one
  return Math.max(
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
    nums[0] * nums[1] * nums[nums.length - 1]
  );
};
