/* Solution using quickSelect
Best Time O(n),Space O(1);
Average Time O(n),Space O(1);
 Worst Time O(n^2),Space O(1);
 */
var findKthLargest = function (nums, k) {
  let position = k - 1;
  if (nums.length === 1) return k;
  return quickSortHelper(0, nums.length - 1, nums, position);
};

function quickSortHelper(startIdx, endIdx, array, position) {
  while (true) {
    if (startIdx > endIdx) {
      break;
    }
    let pivot = startIdx;
    let left = startIdx + 1;
    let right = endIdx;
    // We kind of sort the array so that at the left side will be numbers >= to pivot
    //and on the right side < number at pivot
    while (left <= right) {
      if (array[left] < array[pivot] && array[right] > array[pivot]) {
        swap(left, right, array);
      }
      // we want all elements at the left idx to be greater >= than element at pivot index
      // and all elements at the right idx to be <= than element at pivot index
      if (array[left] >= array[pivot]) left++; // then element at left index is at the correct position =>go further
      if (array[right] <= array[pivot]) right--; // then element at right index is at the correct position =>go further
    }
    //now put the pivot number into its correct position AND that position is under the right pointer
    swap(pivot, right, array);
    // once the array[pivot] is at its correct position =>all numbers to its left will be >
    //all the numbers to its right will be >

    //check if the number that we just swapped into its correct position is located under the k position?
    if (right === position) return array[right];
    else if (right < position) startIdx = right + 1;
    else endIdx = right - 1; //repeat the process on the left part of the array
  }
}
function swap(left, right, array) {
  let swap = array[left];
  array[left] = array[right];
  array[right] = swap;
}
