//Brute force approach
//Time O(n); Space O(1)
var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) return i;
  }
};
