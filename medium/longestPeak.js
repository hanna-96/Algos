//Write a function that takes in an array of integers and returns the length of the longest peak in
//the array.A peak is defined as adjacent integers in the array that are STRICTLY INCREASING
//until they reach a tip(the higest value in the peak),at which point
//they become STRICTLY DECREASING.At least three integers are required to form a peak.

//Input: [1,2,3,3,4,0,10,6,5,-1,-3,2,3]
//Output : 6 // 0,10,6,5,-1,-3

//Time O(n); space O(1)
function longestPeak(array) {
  // Write your code here.
  let maxLength = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      //we found a peak.
      //now starting from its tip check how long is this peak to its right and to its left
      let leftIdx = i - 1;
      let rightIdx = i + 1;
      while (array[leftIdx] > array[leftIdx - 1] && leftIdx >= 0) leftIdx--;
      while (array[rightIdx] > array[rightIdx + 1] && rightIdx < array.length)
        rightIdx++;
      let currentLength = rightIdx - leftIdx + 1;
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}
