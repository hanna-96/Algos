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

//optimal solution
//Time O(n), Space O(n)
function sortedSquaredArray(array) {
  // initialize two pointers
  //one pointing to the potential smallest value
  //another pointing to the potential larger value
  //start looping and compare the absolute values of numbers under those pointers
  //place them into the right position in the res array
  let res = new Array(array.length);
  let smallerIdx = 0;
  let largerIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    let smallerVal = array[smallerIdx];
    let largerVal = array[largerIdx];
    if (Math.abs(smallerVal) < Math.abs(largerVal)) {
      res[i] = largerVal * largerVal;
      largerIdx--;
    } else {
      res[i] = smallerVal * smallerVal;
      smallerIdx++;
    }
  }
  return res;
}
