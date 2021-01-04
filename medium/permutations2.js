// Given a collection of numbers, nums, that might contain duplicates,
// return all possible unique permutations in any order.

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permuteUnique = function (nums) {
  let perms = [];
  findPerms(nums, perms, 0);
  return perms;
};

function findPerms(nums, perms, idx) {
  let set = new Set();

  if (idx === nums.length - 1) {
    perms.push(nums.slice());
  } else {
    for (let j = idx; j < nums.length; j++) {
      if (!set.has(nums[j])) {
        swap(idx, j, nums);
        findPerms(nums, perms, idx + 1);
        swap(idx, j, nums);
        set.add(nums[j]);
      }
    }
  }
}
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
