// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

//Time O(n);Space O(1)
var maxProduct = function (nums) {
  if (nums.length < 2) return nums[0];
  let minsubArr = nums[0]; //. (at this point in time, what's our max so far)
  let maxsubArr = nums[0]; // (at this point in time, what's our min so far)
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = maxsubArr * nums[i]; //6 -12 -8
    /*
     * What's the largest number at this point in time?
     *      The new number introduced?
     *      The minSoFar times new number?
     *      The maxSoFar times new number?
     */
    maxsubArr = Math.max(
      nums[i],
      Math.max(minsubArr * nums[i], maxsubArr * nums[i])
    ); //6 -2 48
    /*
     * What's the smallest number at this point in time?
     *      The new number introduced?
     *      The minSoFar times new number?
     *      The old maxSoFar times new number?
     */
    minsubArr = Math.min(nums[i], Math.min(minsubArr * nums[i], temp)); //3 -12 -4

    max = Math.max(max, maxsubArr); //6
  }
  return max;
};
//brute force solution Time(O(n^2) Space O(1))
const maxProduct = (nums) => {
	let result = Number.NEGATIVE_INFINITY;

	for (let i = 0; i <= nums.length - 1; i++) {
		let product = 1;
		for (let j = i; j <= nums.length - 1; j++) {
			let val = nums[j];
			product *= val;
			if (product > result) result = product;
		}
	}
	return result;
};
