//   Write a function that takes in an n x m two-dimensional array (that can be
//     square-shaped when n == m) and returns a one-dimensional array of all the
//     array's elements in zigzag order.

//     Zigzag order starts at the top left corner of the two-dimensional array, goes
//     down by one element, and proceeds in a zigzag pattern all the way to the
//     bottom right corner.

//Input  = [
//   [1,  3,  4, 10],
//   [2,  5,  9, 11],
//   [6,  8, 12, 15],
//   [7, 13, 14, 16],
// ]
//Output :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//Time O(n), space O(n), where n is the total number of elements in a 2D array
function zigzagTraverse(array) {
  let res = [];
  let startRow = 0;
  let startCol = 0;
  let endRow = array.length - 1;
  let endCol = array[0].length - 1;
  let goingDown = true;

  while (
    startRow >= 0 &&
    startRow <= endRow &&
    startCol <= endCol &&
    startCol >= 0
  ) {
    res.push(array[startRow][startCol]);
    // GO DOWN
    if (goingDown) {
      if (startRow === endRow || startCol === 0) {
        //change direction and go diagonally up
        goingDown = false;
        if (startRow === endRow) startCol++;
        //mpve one position right
        else if (startCol === 0) startRow++; //change direction and go diagonally up
      } else {
        startRow++;
        startCol--;
      }
    } else {
      //GO UP

      //cover the edge cases when we need to stop going up
      if (startRow === 0 || startCol === endCol) {
        goingDown = true;
        if (startCol === endCol) startRow++;
        //just move one step down
        else if (startRow === 0) {
          startCol++; // move one step right
        }
      } else {
        startRow--;
        startCol++;
      }
    }
  }
  return res;
}
