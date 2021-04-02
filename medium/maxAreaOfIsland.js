// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

//Time O(r x c),space O(r*c)
// Time Complexity: O(R*C)O(R∗C), where RR is the number of rows in the given grid, and CC is the number of columns. We visit every square once.

// Space complexity: O(R*C)O(R∗C), the space used by seen to keep track of visited squares, and the space used by the call stack during our recursion.
var maxAreaOfIsland = function (grid) {
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        total = Math.max(total, traverseNode(i, j, grid));
      }
    }
  }
  return total;
};
function traverseNode(i, j, grid) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  grid[i][j] = 0;
  return (
    1 +
    traverseNode(i + 1, j, grid) +
    traverseNode(i - 1, j, grid) +
    traverseNode(i, j + 1, grid) +
    traverseNode(i, j - 1, grid)
  );
}

    //solution 2 
    var maxAreaOfIsland = function(grid) {
      // iterate grid
          //once we find 1 call helper function to explore 4 neighbors 
          // in that helper func check if we are out of bounds or if cell === 0 return 0;;
          // otherwise call recursively on 4 neighbors
          let total = {count:0};
          for(let i = 0; i < grid.length; i++){
              for(let j = 0; j < grid[0].length; j++){
                  if(grid[i][j] === 1) {
                  exploreNeighbors(grid,total,i,j)
                  }
              }
          }
          return total.count;
      };

function exploreNeighbors(grid,total,row,col,currentResult = {count:0}){
  if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0 ) return 0;
  total.count = Math.max(total.count, currentResult.count+=1)
     grid[row][col] = 0; //mark it as visited
      
      exploreNeighbors(grid,total,row+1,col,currentResult) 
      exploreNeighbors(grid,total,row-1,col,currentResult) 
      exploreNeighbors(grid,total,row,col + 1,currentResult) 
      exploreNeighbors(grid,total,row,col - 1,currentResult);

      }