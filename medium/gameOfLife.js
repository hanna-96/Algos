// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0).
// Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state,
//  where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

//Example 1
// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

//Example 2
// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]
const gameOfLife = function (board) {
    // let copy2 = new Array(board.length).fill(new Array(board[0].length).fill(0));
    let copy = new Array(board.length)
      .fill(0)
      .map(() => new Array(board[0].length).fill(0));
  
    let coordinates = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
      [1, -1],
      [1, 1],
      [-1, -1],
      [-1, 1],
    ];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        let onesCount = 0;
  
        for (let direction of coordinates) {
          let x = direction[0] + i;
          let y = direction[1] + j;
          if (
            x >= 0 &&
            x <= board.length - 1 &&
            y >= 0 &&
            y <= board[i].length - 1 &&
            board[x][y] === 1
          ) {
            onesCount++;
          }
        }
  
        if (board[i][j] === 0) {
          if (onesCount === 3) copy[i][j] = 1;
        } else if (board[i][j] === 1) {
          if (onesCount === 2 || onesCount === 3) {
            copy[i][j] = 1;
          }
        }
      }
    }
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = copy[i][j];
      }
    }
  };
  