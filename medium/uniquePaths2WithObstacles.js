
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// Example 1:
// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
//Time O(m*n), SPace O(n)
var uniquePathsWithObstacles = function (obstacleGrid) {
    let copy = new Array(obstacleGrid.length)
      .fill(0)
      .map(() => new Array(obstacleGrid[0].length).fill(0));
  
    //check the 1st columns if it contains any obstacles
    for (let row = 0; row < obstacleGrid.length; row++) {
      if (obstacleGrid[row][0] === 1) break;
      // all the cells in the oth columns will be left to 0 and we never reach the end of the grid
      else copy[row][0] = 1;
    }
    //check the 1st row if it contains any obstacles
    for (let col = 0; col < obstacleGrid[0].length; col++) {
      if (obstacleGrid[0][col] === 1) break;
      // all the cells in the oth columns will be left to 0 and we never reach the end of the grid
      else copy[0][col] = 1;
    }
  
    // Starting from cell(1,1) fill up the values
    // No. of ways of reaching cell[i][j] = cell[i - 1][j] + cell[i][j - 1]
    // i.e. From above and left.
    for (let row = 1; row < obstacleGrid.length; row++) {
      for (let col = 1; col < obstacleGrid[row].length; col++) {
        if (obstacleGrid[row][col] === 0) {
          copy[row][col] = copy[row - 1][col] + copy[row][col - 1];
        }
      }
    }
    return copy[copy.length - 1][copy[0].length - 1];
  };
  