// Given an array of integers between 1 and n,where n  is the length of the array, write a function
//  that returns the first integer that appears more than once (when the array is
//  read from left to right).
//   In other words, out of all the integers that might occur more than once in the
//   input array, your function should return the one whose first duplicate value
//   has the minimum index.
// If no integer appears more than once, your function should return -1
// Note that you're allowed to mutate the input array.

// Input:  = [2, 1, 5, 2, 3, 3, 4]
// Output: 2( 2 is the first integer that appears more than once.)
// 3 also appears more than once, but the second 3 appears after the second 2.

//brute force solution
// Time O(n^2);space O(1)
function firstDuplicateValue(array) {
  // Write your code here.
  let minDublicateIdx = array.length;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        minDublicateIdx = Math.min(minDublicateIdx, j);
      }
    }
  }
  if (minDublicateIdx === array.length) return -1;
  else return array[minDublicateIdx];
}
//   more optimal solution
// Time O(n);space O(n)
function firstDuplicateValue(array) {
  // Write your code here.
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      set.add(array[i]);
    } else return array[i];
  }
  return -1;
}

//the most optimal solution
//Time O(n);space O(1)
function firstDuplicateValue(array) {
  // Write your code here.
  //because from the prompt we know that all nums will be in between 1<=n<=length
  // let's map the values of the arr to indices in the arr by subtracting 1 from them
  for (let num of array) {
    let absValue = Math.abs(num);
    // 		since we know that from prompt all nums are positive, so if we see a negative num =>
    // it means it's a dublicate
    if (array[absValue - 1] < 0) return absValue;
    // 		but if we see a dublicate =>it will be mapped to the exact same index,so
    // 		we'll look it up and if its already negative then its a dublicate
    array[absValue - 1] *= -1;
  }
  return -1;
}
