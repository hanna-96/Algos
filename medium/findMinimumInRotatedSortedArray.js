//Time O(log n); Space O(log n); Binary search
var findMin = function (nums) {
  if (nums.length < 2) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  // if the array is not rotated
  if (nums[right] > nums[0]) return nums[0];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("el at mid", nums[mid]);
    // if the mid element is greater than its next element then mid+1 element is the smallest
    // This point would be the point of change. From higher to lower value.
    if (nums[mid + 1] < nums[mid]) return nums[mid + 1];
    // if the mid element is lesser than its previous element then mid element is the smallest

    if (nums[mid - 1] > nums[mid]) return nums[mid];
    //  if the mid elements value is greater than the 0th element this means
    // the least value is still somewhere to the right as we are still dealing with elements greater than nums[0]
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else if (nums[mid] < nums[0]) {
      // if nums[0] is greater than the mid value then this means the smallest value is somewhere to the left
      right = mid - 1;
    }
  }
};
