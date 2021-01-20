//   Write a function that takes in an array of integers and returns an array of
//   length 2 representing the largest range of integers contained in that array.

//   The first number in the output array should be the first number in the range,
//   while the second number should be the last number in the range.
//   A range of numbers is defined as a set of numbers that come right after each
//   other in the set of real integers. For instance, the output array [2,6], representing
//   the range {2,3,4,5,6}, , which is a range of length 5. Note that numbers don't need to be sorted or adjacent
//   in the input array in order to form a range.
// You can assume that there will only be one largest range.

//Input   = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
//Output = [0,7]

//brute force solution
//Time O(n log n) Space O(n)
function largestRange(array) {
  // Write your code here.
  if (array.length < 2) return [array[0], array[array.length - 1]];
  const newArr = array.sort((a, b) => a - b);
  let curLargest = [newArr[0]];
  let largest = [];
  let first = 0;
  let last = 0;
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i - 1] === newArr[i] - 1) {
      curLargest.push(newArr[i]);
    } else if (newArr[i - 1] === newArr[i]) continue;
    else {
      curLargest = [newArr[i]];
    }
    if (largest.length <= curLargest.length) {
      largest = curLargest;
    }
  }
  return [largest[0], largest[largest.length - 1]];
}
