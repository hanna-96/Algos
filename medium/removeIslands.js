//   You're given a two-dimensional array (a matrix) of potentially unequal height
//   and width containing only 0 and 1 s. The matrix
//   represents a two-toned image, where each 1 represents black and 0 represents white.
//  An island is defined as any number of 1 s that are horizontally or vertically adjacent (but not
//   diagonally adjacent) and that don't touch the border of the image. In other
//   words, a group of horizontally or vertically adjacent  1s isn't an
//   island if any of those 1s are in the first row, last row, first
//   column, or last column of the input matrix.
//   Note that an island can twist. In other words, it doesn't have to be a
//   straight vertical line or a straight horizontal line; it can be L-shaped, for
//   example.
// You can think of islands as patches of black that don't touch the border of
// the two-toned image.

// Write a function that returns a modified version of the input matrix, where
// all of the islands are removed. You remove an island by replacing it with 0 s.
// Naturally, you're allowed to mutate the input matrix.
//Input  =
// [
//     [1, 0, 0, 0, 0, 0],
//     [0, 1, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1, 0],
//     [1, 1, 0, 0, 1, 0],
//     [1, 0, 1, 1, 0, 0],
//     [1, 0, 0, 0, 0, 1]
//   ]
// Output:[
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0],
//   [1, 1, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 1]
// ]

//Time O(wh) space O(wh) ,where w and h are the width and height of the input matrix
function removeIslands(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      //if they current node does not touch the border then move forward
      if (!touchesBorder(i, j, matrix)) continue;
      //if current node is not 1 (later it might be 0 or 2) then move forward
      if (matrix[i][j] !== 1) continue;

      //but if node touches the border and it is 1 then we have to change it to 2 and
      //also explore its neighbours that might be part of it
      change1ConnectedToBorderTo2(i, j, matrix);
    }
  }

  //after we changed all 1's that are touching the border to 2's in matrix=> set all 1's to 0's and 2's back to 1's
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) matrix[i][j] = 0;
      else if (matrix[i][j] === 2) matrix[i][j] = 1;
    }
  }
  return matrix;
}

function touchesBorder(i, j, matrix) {
  return (
    i === 0 || i === matrix.length - 1 || j === 0 || j === matrix[i].length - 1
  );
}
function change1ConnectedToBorderTo2(i, j, matrix) {
  let stack = [[i, j]]; //position of current node that touches the border
  while (stack.length) {
    let currentPosition = stack.pop();
    let [i, j] = currentPosition;

    matrix[i][j] = 2; //reassign it it 2
    //now lets explore all its neighbours
    let neighbours = traverseNeighbours(i, j, matrix);
    for (let neighbour of neighbours) {
      let [i, j] = neighbour;
      if (matrix[i][j] !== 1) continue; //if it's neighbour is 0 then just skip it
      stack.push(neighbour); //push only those neighbours that ===1
    }
  }
}
function traverseNeighbours(i, j, matrix) {
  let neighbours = []; // it will look like that [[1,0],[3,4]...]
  if (i > 0) neighbours.push([i - 1, j]);
  if (i < matrix.length - 1) neighbours.push([i + 1, j]);
  if (j > 0) neighbours.push([i, j - 1]);
  if (j < matrix[0].length - 1) neighbours.push([i, j + 1]);

  return neighbours;
}
