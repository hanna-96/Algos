// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0
//represents water.

// Grid cells are connected horizontally/vertically (not diagonally).
//The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island.
//One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:
// Input: grid = [[1]]
// Output: 4

var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      else {
        //we have to check all the corners in the grid
        //because outside will always be sea(based on prompt)
        // Over the sea(if we're in the top left corner=>we def know that outside is sea(0))
        if (i == 0 || grid[i - 1][j] == 0) perimeter++;
        // On the left, facing the sea(we're at the very top=>we def know that left is sea(0))
        if (j == 0 || grid[i][j - 1] == 0) perimeter++;
        // On the right, facing the sea(we're at the bottom =>we def know that below is sea(0))
        if (i == grid.length - 1 || grid[i + 1][j] == 0) perimeter++;
        // Facing the sea below(we're at the last column and to the right is sea(0))
        if (j == grid[i].length - 1 || grid[i][j + 1] == 0) perimeter++;
      }
    }
  }
  return perimeter;
};
//time O(m*n) where m is the number of rows , n- number of columns of the gris
//Space O(1) Only the result variable is updated and there is no other space requirement.

//aproach 2
//set perimeter to 0 initially
//loop over each cell
//if cell is land =>perimeter+=4
//then check only its LEFT and RIGHT neighbours(if they are lands(1) then -2 from perimeter)
//if the are water(0) do nothing and continue..
//return the perimeter after we're done looping
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      else {
        perimeter += 4;
        //while looping we'll be checking ONLY 2 neighbours(top and left);
        //if they're lands then subtract 2 from perimeter
        if (i > 0 && grid[i - 1][j] === 1) perimeter -= 2; //checking top neighbour
        if (j > 0 && grid[i][j - 1] === 1) perimeter -= 2;//checking the left neighbour
      }
    }
  }
  return perimeter;
};
//time O(m*n) where m is the number of rows , n- number of columns of the gris
//Space O(1) Only the result variable is updated and there is no other space requirement.
