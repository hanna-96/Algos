/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formal
 if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10

Bottom up approach
Start looping from the 2nd row from the end, because we can cover and compare more elements
Modify the cell in place: find the Min between the one that is under the same idx below or the next one below current AND ADD it to current cell value
This way we'll find the min path sam from bottom to the top
*/
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};
//Solution 2 usimg extra space
// var minimumTotal = function(triangle) {

//     const dp = new Array(triangle.length);
//         for(let i = 0; i < triangle.length; i++){
//             dp[i] = triangle[triangle.length - 1][i];
//         }
//      for(let i = triangle.length - 2; i >= 0;i--){
//         for(let col = 0; col <= i; col++){
//             dp[col] = triangle[i][col] + Math.min(dp[col],dp[col +1])

//         }
//      }
//     return dp[0]

// };
