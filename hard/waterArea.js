//Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.
// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

//Time O(n);
// Space O(n)
function waterArea(heights) {
  // Write your code here.
  //for each index calculate how much water will be contained above that index
  //if there's no pillar at least at one side of the existing pillar->
  //then the water spills(No reason to calculate it)
  //!!!Water should be trapped in between two pillars!!!
  //1. find the tallest pillar to the left of the current index
  //2.  find the tallest pillar to the right to it
  //3.find the minimum height of two tallest pillars=>
  // what is the smallest between the two tallest(right , left)  to see if the current element has room for water
  //4.if the minHeight < currentEl then substract currentEl from minHeigt and it will be
  //how much water can be trapped above the current element
  //BUT if curEl>minHeight => water will be 0 (it will run away)

  let maxes = [];
  let leftMax = 0;

  for (let i = 0; i < heights.length; i++) {
    //from the very start maxes[0] will be 0 because if we look at heights[0] there will never be pillars
    //to the left of it
    maxes[i] = leftMax; //0 8 8 8 8 8 8 10 10 10 10 10
    //now update leftMax for the next iteration
    leftMax = Math.max(leftMax, heights[i]); //0 8 8 8 8 8 8 10 10 10 10 10
  }
  //once we are done with the loop  above maxes will contain all the maxLeft pillars
  //now store right maxes somewhere
  let rightMax = 0;
  //we'll restore rightmaxes in our maxes array
  for (let i = heights.length - 1; i >= 0; i--) {
    //because maxes[i] already has the tallest leftMax stored
    let minHeight = Math.min(rightMax, maxes[i]); //min between maxRight and maxLeft  0
    if (heights[i] < minHeight) {
      //element is lower then pillars so wthere's room for water above it
      maxes[i] = minHeight - heights[i];
    } else {
      maxes[i] = 0; // pillar is lower then element->water will run away
    }
    //update the rightMax with each iteration
    rightMax = Math.max(rightMax, heights[i]); // 3
  }
  return maxes.reduce((curEl, sum) => sum + curEl, 0);
}
//solution 2 using 3 loops(time and space are the same as above)
function waterArea(heights) {
  // Write your code here.

  let leftmaxes = [];
  let lMax = 0;

  for (let i = 0; i < heights.length; i++) {
    leftmaxes[i] = lMax;
    lMax = Math.max(heights[i], lMax);
  }
  console.log("leftmaxes", leftmaxes);
  let rightMaxes = [];
  let rMax = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    rightMaxes[i] = rMax;
    rMax = Math.max(rMax, heights[i]);
  }
  console.log("rightmaxes", rightMaxes);
  let area = 0;
  let res = [];
  for (let i = 0; i < heights.length; i++) {
    //now looking at current el let's calculate the area of water above it
    let minHeight = Math.min(leftmaxes[i], rightMaxes[i]); //take the min Height on both sides of current el
    if (heights[i] < minHeight) {
      //find the difference between the minHeight and the current el(how much water will be stored)
      //and add it to the prev area
      area += minHeight - heights[i]; // skip+skip+8+8+3+8+8+skip+3+3+2+2+3=>48
    }
  }
  return area;
}
//solution 2 pointers
function waterArea(heights) {
  // Write your code here.
  let leftIdx = 0;
  let rightIdx = heights.length - 1;
  let leftMax = heights[leftIdx];
  let rightMax = heights[rightIdx];
  let water = 0;

  while (leftIdx < rightIdx) {
    if (heights[leftIdx] < heights[rightIdx]) {
      leftIdx++;
      leftMax = Math.max(leftMax, heights[leftIdx]);
      water += leftMax - heights[leftIdx]; // 0
    } else {
      rightIdx--;
      rightMax = Math.max(rightMax, heights[rightIdx]);
      water += rightMax - heights[rightIdx];
    }
  }
  return water;
}
