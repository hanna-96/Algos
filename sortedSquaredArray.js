//   Write a function that takes in a non-empty sorted array of integers and
//   returns a new array of the same length with the squares of the original
//   integers sorted in increasing order.
//Input  = [1, 2, 3, 5, 6, 8, 9];
//Output = [1, 4, 9, 25, 36, 64, 81]

//brute force solution
//Time O(n log n); Space O(n);
function sortedSquaredArray(array) {
  let res = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let squared = array[i] * array[i];
    res[i] = squared;
  }
  return res.sort((a, b) => a - b);
}
