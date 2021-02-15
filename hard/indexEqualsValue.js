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

//optimal Solution
//Time O(log n); Space O(1)
function indexEqualsValue(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); //2
    if (array[mid] < mid) {
      //all values to its left will be smaller then its corresponding indeces,because
      //it's a sorted array, so all indeces will decrease by at least 1. and all values will decrease by at least 1
      left = mid + 1;
    } else if (array[mid] === mid && mid === 0) {
      // !!!meaning we found the 0th index in the array that === to its value and there're no more elements before this one
      return mid;
    } else if (array[mid] === mid && array[mid - 1] < mid - 1) {
      //if we found the first match =>We still need to find if there are the elemnts before that might also be a match
      //BUT if the leftmost neighbor of current element is < than the index of that neighbor=>There will not
      //be any matches on the leftside(because all values will be less then its indeces), so return the current mid!
      return mid;
    } else {
      //If the current value is > i , than ALL the values to its right will be > than indeces,so explore left side
      // OR  if the leftmost neighbor of current element is === to the index of that neighbor
      //There will be definitely another match on the left side, so explore it!
      right = mid - 1;
    }
  }
  return -1;
}
