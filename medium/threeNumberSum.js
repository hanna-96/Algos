// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
//Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: [];

//Time O(n^2);
//Space O(n);
var threeSum = function (nums) {
  //using 2 pointers(left,right)
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    //make sure we're grabbing not the same nums[i] that was before
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        //even though we found the 1st triplet =>there might be more
        //so we're still at (i=0) but we have more elements to check
        //before we move i++
        //we move both pointers at the same time because WE DEF KNOW THAT
        //IF WE MOVE ONLY LEFT (the number will be larger than we need) OR
        //IF WE MOVE ONLY RIGHT(the number will be less)
        //so we move BOTH pointers
        left++;
        right--;
        //BUT We need to handle dublicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (currentSum < 0) {
        left++;
      } else if (currentSum > 0) {
        right--;
      }
    }
  }
  return result;
};
