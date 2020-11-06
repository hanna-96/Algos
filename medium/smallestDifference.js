//write a function that takes two arrays of integers,finds the pair of numbers
//(one from each array) whose absolute difference(the distance between number on the real number line)
// is closest to 0,and return an array of those 2 numbers.
//Input: "arrayOne": [-1, 5, 10, 20, 28, 3], "arrayTwo": [26, 134, 135, 15, 17];
//Output: [28, 26].

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let results = [];
  let currentDiff = Infinity;
  let minDiff = Infinity;
  let p1 = 0;
  let p2 = 0;
  while (p1 < arrayOne.length && p2 < arrayTwo.length) {
    let firstNum = arrayOne[p1];
    let secNum = arrayTwo[p2];
    if (arrayOne[p1] < arrayTwo[p2]) {
      currentDiff = arrayTwo[p2] - arrayOne[p1];
      p1++;
    } else if (arrayOne[p1] > arrayTwo[p2]) {
      currentDiff = arrayOne[p1] - arrayTwo[p2];
      p2++;
    } else {
      return [arrayOne[p1], arrayTwo[p2]];
    }
    if (minDiff > currentDiff) {
      minDiff = currentDiff;
      results = [firstNum, secNum];
    }
  }
  return results;
}
//time O(n log n + m log m);
//space O(1)
