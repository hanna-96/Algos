// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.

//Time Time Complexity: O(9!⋅K / (9−K)!)
//Space O(k),where k is number of elements in currentCombination arr
const combinationSum3 = (k, n) => {
  let combinations = [];
  let currentCombination = [];

  const pickDigit = (idx, currentCombination, targetSum) => {
    if (targetSum < 0 || currentCombination.length > k) return;
    if (currentCombination.length === k && targetSum === 0) {
      combinations.push(currentCombination.slice());
    }

    for (let i = idx; i <= 9; i++) {
      currentCombination.push(i); //[1,2,3]
      //now let's try all the numbers after current i
      pickDigit(i + 1, currentCombination, targetSum - i);
      currentCombination.pop(); //backtracking
    }
  };
  pickDigit(1, currentCombination, n);
  return combinations;
};
