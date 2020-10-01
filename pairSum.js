// Given an array arr consisting of N integers, sorted in ascending order (least to greatest),
// and a separate number (a sum), determine if any 2 numbers in the array add up to the sum.
// Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// Examples
// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false
//     naive solution
function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) return [array[i], array[j]];
    }
  }
  return [];
}
//time O(n^2)
//          solution  (using pointers)
//time: O(n);space: O(1)
function pairSum(arr, sum) {
  let left = arr[0];
  let right = arr.length - 1;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum === sum) return true;
    else if (currentSum < sum) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

//          solution 2 (using memoization)
//time: O(n);space: O(1)
function pairSum2(arr, sum) {
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    let difference = sum - arr[i];
    //check if the current value is already in the map. If so,
    //it means it can be added to a previous element to add up to the sum
    //and the function can return true;
    if (arr[i] in memo) {
      return true;
    } else {
      memo[difference] = true;
    }
  }
  return false;
}
