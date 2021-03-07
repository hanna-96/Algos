// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

//Brute force solution Time O( n log n); Space O(k)
var topKFrequent = function (nums, k) {
  let res = [];
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) map.set(num, 0);
    let val = map.get(num);
    map.set(num, val + 1);
  }
  let frequences = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(frequences[i][0]);
  }
  return res;
};
