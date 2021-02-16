// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:
// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

//Time O(m*n);Space O(1)
const minPathSum = function (grid) {
  //create arr the same size as grid
  //traverse grid and at each cellcalculate and store the sum of paths that took us to current node(cell);
  //Eventually, when we get to the last node and store the sum for him =>the will be result
  const i = grid.length - 1;
  const j = grid[0].length - 1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) grid[i][j] = grid[i][j];
      else if (i === 0 && j > 0) grid[i][j] = grid[i][j] + grid[i][j - 1];
      else if (j === 0) grid[i][j] = grid[i][j] + grid[i - 1][j];
      else
        grid[i][j] = Math.min(
          grid[i][j] + grid[i][j - 1],
          grid[i][j] + grid[i - 1][j]
        );
    }
  }
  return grid[i][j];
};
