// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

//Time O(n),Space O(n);
var trap = function (height) {
  //!!!Water should be trapped in between two pillars!!!
  //1. find the tallest pillar to the left of the current index
  //2.  find the tallest pillar to the right to it
  //3.find the minimum height of two tallest pillars=>
  // what is the smallest between the two tallest(right , left)  to see if the current element has room for water
  //4.if the minHeight < currentEl then substract currentEl from minHeigt and it will be
  //how much water can be trapped above the current element
  //BUT if curEl>minHeight => water will be 0 (it will run away)
  let maxesLeft = new Array(height.length).fill(0);
  let maxesRight = new Array(height.length).fill(0);

  let leftMax = 0;
  for (let i = 0; i < height.length; i++) {
    maxesLeft[i] = leftMax;
    leftMax = Math.max(height[i], leftMax);
  }
  let rightMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxesRight[i] = rightMax;
    rightMax = Math.max(height[i], rightMax);
  }
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    let currentHeight = height[i];
    let minHeight = Math.min(maxesLeft[i], maxesRight[i]);
    if (currentHeight < minHeight) res += minHeight - currentHeight;
  }
  return res;
};
//two pointers approach
//Time O(n), space O(1);
var trap = function (height) {
  let leftIdx = 0;
  let rightIdx = height.length - 1;
  let leftMax = height[leftIdx];
  let rightMax = height[rightIdx];
  let water = 0;

  while (leftIdx < rightIdx) {
    if (height[leftIdx] < height[rightIdx]) {
      leftIdx++;
      leftMax = Math.max(leftMax, height[leftIdx]); //8
      water += leftMax - height[leftIdx]; // 0
    } else {
      rightIdx--;
      rightMax = Math.max(rightMax, height[rightIdx]); //3
      water += rightMax - height[rightIdx]; //3
    }
  }
  return water;
};
