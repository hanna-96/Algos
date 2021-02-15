//   Write a function that takes in a sorted array of distinct integers and returns
//   the first index in the array that is equal to the value at that index. In
//   other words, your function should return the minimum index where index === array[index]
//   If there is no such index, your function should return -1.
//Input  = [-5, -3, 0, 3, 4, 5, 9]
//Output: 3

//brute force
///Time O(n); space O(1)
function indexEqualsValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === array[i]) return i;
  }
  return -1;
}
