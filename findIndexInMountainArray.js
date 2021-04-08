// Time O(n); Space O(1)
var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) return i;
  }
};

// optimal solution Time (log n),Space O(1)
var peakIndexInMountainArray = function (arr) {
  return helper(arr, 0, arr.length - 1);
};
function helper(arr, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] > arr[mid + 1]) {
      // discover left side
      right = mid - 1;
    } else if (arr[mid] <= arr[mid + 1]) {
      // explore right side
      left = mid + 1;
    }
  }
}
