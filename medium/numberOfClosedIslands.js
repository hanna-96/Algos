// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Example 1:
// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2

// Example 2:
// Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// Output: 1

//Time O(m*n);Space O(m*n)
const closedIsland = (grid) => {
  let count = 0;
  //traverse grid
  //find a 0
  //check if it touches the boundraies=>if so skip it
  //otherwise check itss neighbours
  //a)if neighbour is 0 chechk if it touches the boundraies
  //if not check it neighbours and so on...
  //b) if at least one neighbour is 1 => check if all other 0 are 1s

  function isIsland(i, j) {
    //everytime we traverse a node if we find a 1 rern true because it means that current node is surrounded at leasrt by 1 water
    if (grid[i][j] === 1) return true;

    //but if it is 0 ,mark it as visited
    //and check if there are other 0's that are part of the same island
    if (grid[i][j] === 0) {
      //if current 0 touches the boundries return false(It is not part of closed island)
      if (
        i === 0 ||
        i === grid.length - 1 ||
        j === 0 ||
        j === grid[i].length - 1
      )
        return false;
      grid[i][j] = 2;
      //if neighbour is 0 check if its neighbors are part of the island as well
      const up = isIsland(i - 1, j);
      const down = isIsland(i + 1, j);
      const left = isIsland(i, j - 1);
      const right = isIsland(i, j + 1);
      //if any of the neighbors result ijn false then the current node is not a closed island!!!
      return up && down && left && right;
    }

    return true;
  }

  for (let i = 0; i <= grid.length - 1; i++) {
    for (let j = 0; j <= grid[i].length - 1; j++) {
      if (grid[i][j] === 0) {
        if (isIsland(i, j)) count++;
      }
    }
  }
  return count;
};
