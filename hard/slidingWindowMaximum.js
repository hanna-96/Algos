// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

//Brute force solution
//Time O(n*k),
//Space O(n)
var maxSlidingWindow = function (nums, k) {
    //each time the sliding window changes => find the max value of the current window and push it to the res arr;
    let maxes = [];
    for (let i = 0; i < nums.length; i++) {
      let copy = [...nums];
      if (i <= nums.length - k) {
        let curWindow = copy.splice(i, k);
        let max = Math.max(...curWindow);
        maxes.push(max);
      }
    }
    return maxes;
  };
  