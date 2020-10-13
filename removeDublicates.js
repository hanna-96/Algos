// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
// It doesn't matter what values are set beyond the returned length.

//naive approach(minus of this approach is that every time we need to make 1 extra step backward with each iteration)
var removeDuplicates = function (nums) {
  //as the arr is sorted->so that we def know al the same numbers will be close to each other
  //check the arr[i] and arr[i+1]
  //if they are the same =>arr(i,1) and i--(because we need to compareagain the same onewith the next one )
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
// optimal solution
//the goal in this approach is to move all the unique chars at the beginning of the arr
// ex: [0,1,1,1,2,2,3,3,4], => [1,2,3,4,0,1,1,2,3]
var removeDuplicates = function (nums) {
  //use pointer i to keep track of unique chars
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    //we need to replace the element AFTER pointer i
    //with the element at pointer j ONLY if they are not the same elements
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
    //but if the numbers are the same =>we'll just keep going forward(j++)
  }
  //need to return the count of all unique characters
  //look up at which number i is pointing after we're done looping
  return i + 1;
};
//Time complextiy : O(n) Assume that n is the length of array. Each of i and j traverses at most n steps.
//Space O(1);
