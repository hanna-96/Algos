// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Time O(log(n)); Space O(1)
function shiftedBinarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (left <= right) {
    console.log("middle", middle);
    console.log("middleElement", array[middle]);
    if (array[middle] === target) return middle;
    if (array[middle] >= array[left]) {
      //then we know that ALL the numbers to the left are SMALLER(in sorted order) then in the middle
      if (target < array[middle] && target >= array[left]) {
        //we def know it is somewhere in between the left pointer and middle pointer
        //so we can eliminate all the right part after middle
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      //then everything before the middle is larger then number in the middle
      //.   8, 9, 4, 5, 6
      if (target > array[middle] && target <= array[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    middle = Math.floor((left + right) / 2);
  }

  return -1;
}
