//   Write a function that takes in an array of integers and returns a boolean
//   representing whether the array is monotonic.

//   An array is said to be monotonic if its elements, from left to right, are
//   entirely non-increasing or entirely non-decreasing.

//   Non-increasing elements aren't necessarily exclusively decreasing; they simply
//   don't increase. Similarly, non-decreasing elements aren't necessarily
//   exclusively increasing; they simply don't decrease.Note that empty arrays and arrays of one element are monotonic.
//Input :array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
//Output true;

//option 1
//time O(n);space O(1)
function isMonotonic(array) {
  // determine if it's increasing OR decreasing
  let notIncreasing = true;
  let notDecreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) notIncreasing = false; //means it's increasing
    if (array[i - 1] > array[i]) notDecreasing = false; // it IS decreasing
  }
  //return if one of the nonIncreasing or noDecreasing are still true
  return notIncreasing || notDecreasing;
}

//option 2
//Time O(n); space O(1)
function isMonotonic(array) {
  if (array.length < 2) return true;

  for (let i = 0; i < array.length; i++) {
    // determine if the whole array is going to be increasing OR decreasing by checking the second element
    if (array[i + 1] < array[i]) {
      //its decreasing
      if (array[i + 2] > array[i + 1]) return false;
    } else if (array[i + 1] > array[i]) {
      if (array[i + 2] < array[i + 1]) return false;
    }
  }
  return true;
}
