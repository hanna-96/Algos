// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note:
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

//Output: [1,2,2,3,5,6]
//solution 1 (2 pointers start  from the end)
var merge = function (nums1, m, nums2, n) {
  //m is the number of elements initialized in nums1
  //n is the number of elements initialized in nums2
  // 0 0 0are placeholders for numbers from nums2

  //start from the end of nums1
  //we'll compare the last initialized elements in each of the two arrays
  //and whichever one is bigger-> we'll put it as a last element of the 1st array
  //1. get a reference(pointer) to the last initialized element in the nums1 arr
  let first = m - 1;
  let second = nums2.length - 1;
  //2.now we need to iterate over both arrays backwards
  for (let i = nums1.length - 1; i >= 0; i--) {
    //i will always start from the end of the nums1
    if (second < 0) break; //meaning that everything from the nums2 is already in nums1 and it is sorted->>Nothing left in nums2 to compare
    if (nums1[first] > nums2[second]) {
      let temp = nums1[first];
      nums1[first] = nums2[second];
      first--;
    } else {
      //basically replacing 0s at the end with actual numbers from nums2
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
};
//Time O(n+m)
//Space O(1)

//solution 2 (2 pointers start from the beginning)
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let copyNums1 = nums1.slice();
  for (let i = 0; i < nums1.length; i++) {
    if (p1 < m && p2 < n) {
      if (copyNums1[p1] <= nums2[p2]) {
        nums1[i] = copyNums1[p1];
        p1++;
      } else if (copyNums1[p1] > nums2[p2]) {
        nums1[i] = nums2[p2];
        p2++;
      }
    } else if (p1 >= m) {
      nums1[i] = nums2[p2];
      p1++;
      p2++;
    } else if (p2 >= n) {
      nums1[i] = copyNums1[p1];
      p1++;
    }
  }
  return nums1;
};

//naive solution
//Time O((n+m)log(n+m))
//Space O(1)
// nums1.splice(m,n)
//   nums1.push(...nums2)
//   nums1.sort((a,b)=>a-b)
console.log("result is", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
