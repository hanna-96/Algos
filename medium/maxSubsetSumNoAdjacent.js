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
  let maxSum = array.slice();
  //at each index store the maxSum that can be generated with no adjacent numbers until the current index
  //BUT not necessarily including the element at current index
  //edge cases
  maxSum[0] = array[0]; //the 1st el will be always the same
  maxSum[1] = Math.max(arr2[0], array[1]); //the 2nd will be whatever is > (1st OR 2nd)
  //continue building the rest of arr2
  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
    // the max sum at this point can be EITHER the calculated sum of the previous no adjacent elements
    // OR the sum of the second previous elements and the current element
    //NOTE : sum at [i-2] will never include the el that is adjacent to the current el
    //so we can add it to the current el (array[i]) BUT!!! if this sum is < than the previous sum(arr2[i-1])
    //then we'll take the prev sum (and not add it to array[i] because it will be adjacent)
  }
  // eventually maxSum =  [75,105,195,195,285,330]
  return maxSum[maxSum.length - 1];
}

//solution 2 (in place)
// Time O(n), Space O(1)

function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
  if (array.length < 2) return array[0];
  let second = array[0]; //maxSum[i-2]
  let first = Math.max(array[0], array[1]); //represents  maxSum[i-1]
  for (let i = 2; i < array.length; i++) {
    let current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}
