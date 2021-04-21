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
//Optimal solution using quick select
//Time O(n),worst O(n^2), when once we repositioned pivot at correct position and it led to a large half of splitted array relative to size of input arr (to the left of pivot or right);
// )We'll end up making n calls to find the kth most frequent el.
//  Space O(n)
var topKFrequent = function (nums, k) {
  let res = [];
  let position = k - 1;
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) map.set(num, 0);
    let val = map.get(num);
    map.set(num, val + 1);
  }
  let allVals = [...map.entries()]; // [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]
  console.log("allVals", allVals);
  allVals = quickSelect(0, allVals.length - 1, position, allVals);
  console.log("allVals", allVals);
  for (let [char, freq] of allVals) {
    res.push(char);
  }
  return res;
};
function quickSelect(start, end, position, nums) {
  //  [ [ 1, 3 ], [ 3, 1 ], [ 2, 2 ] ]  - >  [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]
  while (true) {
    if (start > end) break;
    let left = start + 1;
    let right = end;
    let pivot = start;

    while (left <= right) {
      if (nums[left][1] < nums[pivot][1] && nums[right][1] > nums[pivot][1]) {
        swap(left, right, nums);
      }
      if (nums[left][1] >= nums[pivot][1]) left++;
      if (nums[right][1] <= nums[pivot][1]) right--;
    }
    swap(pivot, right, nums);

    if (right === position) return nums.slice(0, right + 1);
    else if (right < position) start = right + 1;
    else end = right - 1;
  }
  return nums;
}
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
