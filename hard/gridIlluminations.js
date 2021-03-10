// You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

// You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.

// Finally, you are given a query array queries, where queries[i] = [rowi, coli]. For the ith query, determine whether grid[rowi][coli] is illuminated or not. After answering the ith query, turn off the lamp at grid[rowi][coli] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowi][coli].

// Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith query was illuminated, or 0 if the lamp was not.

// //Example 1
// Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
// Output: [1,0]
// Explanation: We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at grid[0][0] then turning on the lamp at grid[4][4].
// The 0th query asks if the lamp at grid[1][1] is illuminated or not (the blue square). It is illuminated, so set ans[0] = 1. Then, we turn off all lamps in the red square.
// The 1st query asks if the lamp at grid[1][0] is illuminated or not (the blue square). It is not illuminated, so set ans[1] = 0. Then, we turn off all lamps in the red rectangle.

//Time O(n+m), where n is the length of lamps, y is the length of the queries
var gridIllumination = function (N, lamps, queries) {
  //0 =>lamp is off
  //1 =>lamp is On

  //define 4 maps, each map will define how many lights are there in the corresponding row/col/diag1/diag2
  //define 5th map lightsOn, that will save the positions of the lights turned ON
  let rowMap = {};
  let colMap = {};
  let diag1Map = {};
  let diag2Map = {};
  let lightsOnMap = new Set();
  let answer = [];

  for (let lamp of lamps) {
    let [x, y] = lamp;
    let key = `${x}-${y}`;
    if (!lightsOnMap.has(key)) {
      lightsOnMap.add(key);
      rowMap[x] = (rowMap[x] || 0) + 1; //turn on all the lights on that row
      colMap[y] = (colMap[y] || 0) + 1; //turn on all the lights on that col
      diag1Map[x + y] = (diag1Map[x + y] || 0) + 1; //turn on all the lights on the diag (upleft-downright) \
      diag2Map[x - y] = (diag2Map[x - y] || 0) + 1; //turn on all the lights on the diag (upright-downleft)  /
    }
  }

  for (let query of queries) {
    let [x, y] = query; //[[1,1],[1,0]]
    if (
      rowMap[x] > 0 ||
      colMap[y] > 0 ||
      diag1Map[x + y] > 0 ||
      diag2Map[x - y] > 0
    ) {
      answer.push(1); //the cell we're looking for is illumninated

      //loop through all current cell's neighbors
      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          let key = `${i}-${j}`;
          //check if the light at the correspondong position is turned ON =>turn it OFF
          //AND turn off all of its 8 neighbors
          if (lightsOnMap.has(key)) {
            lightsOnMap.delete(key);
            rowMap[i]--;
            colMap[j]--;
            diag1Map[i + j]--;
            diag2Map[i - j]--;
          }
        }
      }
    } else answer.push(0);
  }
  return answer;
};
