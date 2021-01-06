// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s
// elements are subset of nums2. Find all the next greater numbers for nums1's elements
//in the corresponding places of nums2.
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
//     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//     For number 1 in the first array, the next greater number for it in the second array is 3.
//     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4].
// Output: [3,-1]
// Explanation:
//     For number 2 in the first array, the next greater number for it in the second array is 3.
//     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

//solution 1 (brute force)
//Time O(m*n) the whole nums1 arr needs to be scanned for all m elements in nums2
//Space O(m) res array of size m is used,where m is the length of nums2
var nextGreaterElement = function (nums1, nums2) {
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) found = true;
      if (found && nums2[j] > nums1[i]) {
        res.push(nums2[j]);
        break;
      }
      if (j === nums2.length - 1) res.push(-1);
    }
  }
  return res;
};
//solution 2 (using stack and hash map)
//Time O(m+n); Space O(m+n), where m is the length of nums1 and n -length of nums2
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let nextGreater = {};

  for (const num of nums2) {
    // console.log('num is',num)
    //check if num(from stack) is < current num=>it ,eans we found the closest larges num
    if (stack.length && stack[stack.length - 1] < num) {
      nextGreater[stack.pop()] = num;
    }
    //push current num to stack first
    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    //is current num in obj? if soo then it has a next greatest value
    nextGreater[nums1[i]]
      ? (nums1[i] = nextGreater[nums1[i]])
      : (nums1[i] = -1);
  }
  return nums1;
};
//we need a while loop because if nums2 consisted of let's say decreasing nums followed by a single incresed num
//then we would just continue storing all nums from stack in obj with a value of that increased integer
//nums2 = [8,7,6,5,10]
