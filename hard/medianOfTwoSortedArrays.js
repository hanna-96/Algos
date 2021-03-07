// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

const findMedianSortedArrays = (nums1, nums2) => {
    //merge two arrays using two pointers
    //find the middle index of the merged array
    //if number of elements is !== %2 then find the Math.floor  and grab that el + next El /2
    let p1 = 0;
    let p2 = 0;
    let k = 0;
    let mergedArr = [];
    while (p1 < nums1.length && p2 < nums2.length) {
      if (nums2[p2] <= nums1[p1]) {
        mergedArr[k] = nums2[p2];
        p2++;
        k++;
      } else if (nums2[p2] > nums1[p1]) {
        mergedArr[k] = nums1[p1];
        p1++;
        k++;
      }
    }
    while (p1 < nums1.length) {
      mergedArr[k++] = nums1[p1++];
    }
    while (p2 < nums2.length) {
      mergedArr[k++] = nums2[p2++];
    }
  
    if (mergedArr.length % 2 !== 0) {
      let med = (0 + mergedArr.length - 1) / 2;
      return mergedArr[med];
    } else {
      let mid = Math.floor((0 + mergedArr.length - 1) / 2);
      let med = (mergedArr[mid] + mergedArr[mid + 1]) / 2;
      return med;
    }
  };
  