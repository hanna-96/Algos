// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?

//Time O(n),Space O(n)
var intersect = function (nums1, nums2) {
  let res = [];
  //find the shorter array
  //store the count of each appearance of number in obj/or map
  //loop through longer array and check if number is in obj AND sore their count as well
  //look in second obj and see if the number is of the same count as in 1st obj, then push it to the res array,
  //otherwise decrement the count untill they are equal, and then push it to res arr

  let obj1 = {}; //store the num of occurances of a shorter array

  if (nums1.length <= nums2.length) {
    for (let num of nums1) {
      if (!obj1[num]) obj1[num] = 1;
      else obj1[num]++;
    }

    for (let num of nums2) {
      if (obj1[num]) {
        res.push(num);
        obj1[num]--;
      }
    }
  } else if (nums2.length < nums1.length) {
    for (let num of nums2) {
      if (!obj1[num]) obj1[num] = 1;
      else obj1[num]++;
    }
    for (let num of nums1) {
      if (obj1[num] && obj1[num] !== 0) {
        obj1[num]--;
        res.push(num);
      }
    }
  }
  return res;
};
