// n an infinite chess board with coordinates from -infinity to +infinity, you have a knight at square [0, 0].

// A knight has 8 possible moves it can make, as illustrated below.
//Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

// Return the minimum number of steps needed to move the knight to the square [x, y]. It is guaranteed the answer exists.

// Example 1:

// Input: x = 2, y = 1
// Output: 1
// Explanation: [0, 0] → [2, 1]
// Example 2:

// Input: x = 5, y = 5
// Output: 4

var minKnightMoves = function (x, y) {
  //the board represents graph, where each node is a cell and it is connected by the moves coordinates
  //So node [0,0] is connected to node [1,2] and [2,1], [2,-1] and so on..

  //Apply BFS using queue. Here the graphb is unweighted
  const directions = [
    [-2, -1],
    [-2, +1], //up
    [-1, -2],
    [+1, -2], //left
    [+2, -1],
    [+2, +1], //down
    [-1, +2],
    [+1, +2],
  ]; //right // moves array will help to keep track of the distance of each cell from the knight position
  let steps = 0;
  let queue = [[0, 0]]; //store the coordinates of all the possible moveCells from current cell(node);
  let visitedCells = new Set(); //keep track of visited cells
  while (queue.length) {
    //each time we consider ALL the possible moves(directions) from a current knight position ,we add all those moves to nextCellsToVisit array
    //Each iteration through nextCellsToVisit (or queue) is considered as 1 step
    let nextCellsToVisit = [];
    console.log("queue", queue);
    // The inner while loop is being used to only process the tree one level/layer at a time, since each level represents the next group of potential knight moves from the current position.
    while (queue.length) {
      let currentCell = queue.shift();
      if (currentCell[0] === x && currentCell[1] === y) return steps;
      // loop throught all possible directions a knight can go

      for (let coordinate of directions) {
        let nextX = currentCell[0] + coordinate[0];
        let nextY = currentCell[1] + coordinate[1];
        let currentCellCoordinates = nextX + "," + nextY;
        if (!visitedCells.has(currentCellCoordinates)) {
          nextCellsToVisit.push([nextX, nextY]);
          visitedCells.add(currentCellCoordinates); //mark current coordinates as visited
        }
      }
    }
    queue = nextCellsToVisit;
    steps++;
  }
  return steps;
};
// var minKnightMoves = function(x, y) {
// const queue = [[0,0,0]];
// const visited = new Set();

// while(queue.length > 0){
// const [nextX, nextY, counter] = queue.shift();

// if(nextX === x && nextY === y) return counter;

// const hash = `${nextX}#${nextY}`;
// if(!visited.has(hash)){
// visited.add(hash);
// queue.push([nextX - 1, nextY - 2, counter + 1]);
// queue.push([nextX + 1, nextY - 2, counter + 1])
// queue.push([nextX + 2, nextY - 1, counter + 1])
// queue.push([nextX + 2, nextY + 1, counter + 1])
// queue.push([nextX + 1, nextY + 2, counter + 1])
// queue.push([nextX - 1, nextY + 2, counter + 1])
// queue.push([nextX - 2, nextY + 1, counter + 1])
// queue.push([nextX - 2, nextY - 1, counter + 1])
// }
// }

// return -1
// };
