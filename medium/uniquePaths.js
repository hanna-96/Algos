// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

// Example 1:
// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 3
// Output: 6

//Once we built our grid , traverse and assign each cell a value of how did we got there.
// We know that there will be always one path to go to any cell at m(row) =0 (come from right)
//and to any cell at n(col)=0(from upper cell),
//so assign those cells to 1.
//Otherwise, each other cell will have the value of the sum of upper cell+ left cell neighbors.
//Eventually our last cell will be the result!

//Time O(m*n);
//Space O(m+n);
const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1;
  let grid = new Array(m).fill(new Array(n).fill(0));

  for (let i = 0; i <= m - 1; i++) {
    for (let j = 0; j <= n - 1; j++) {
      if (i === 0 && j === 0) continue;
      else if (i === 0 || j === 0) grid[i][j] = 1;
      else grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }
  return grid[m - 1][n - 1];
};
