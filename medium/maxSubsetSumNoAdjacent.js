//   Write a function that takes in an array of positive integers and returns the
//   maximum sum of non-adjacent elements in the array.
//If the input array is empty, the function should return  0.

//Input: array  = [75, 105, 120, 75, 90, 135]
//Output: 330; // 75+120+135
//Time O(n);space O(n)
function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
  if (array.length < 2) return array[0];
  let arr2 = array.slice();
  //at each index store the maxSum that can be generated with no adjacent numbers until the current index
  //BUT not necessarily including the element at current index
  //edge cases
  arr2[0] = array[0]; //the 1st el will be always the same
  arr2[1] = Math.max(arr2[0], array[1]); //the 2nd will be whatever is > (1st OR 2nd)

  //continue building the rest of arr2
  for (let i = 2; i < array.length; i++) {
    arr2[i] = Math.max(arr2[i - 1], arr2[i - 2] + array[i]);
    //NOTE : sum at [i-2] will never include the el that is adjacent to the current el
    //so we can add it to the current el (array[i]) BUT!!! if this sum is < than the preveious sum(arr2[i-1])
    //then we'll take the prev sum (and not add it to array[i] because it will be adjacent)
  }
  return Math.max(...arr2);
}
