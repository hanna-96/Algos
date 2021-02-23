// Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Surrounded regions should not be on the border, which means that any 'O'
// on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it
// is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.

const solve = function (board) {
  //traverse the grid's boundries first and check ebvery node on each boundry=>do dfs on each node to find other os connected

  //loop through ONLY the rows first and check the first and the last column (left and right boundries)
  for (let i = 0; i < board.length; i++) {
    reassignBoundryZeros(i, 0, board);
    reassignBoundryZeros(i, board[i].length - 1, board);
  }
  //loop through ONLY the columns now and check the first and the last rows (up and down boundries)

  for (let j = 0; j < board[0].length; j++) {
    reassignBoundryZeros(0, j, board);
    reassignBoundryZeros(board.length - 1, j, board);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "2") board[i][j] = "O";
      else if (board[i][j] === "O") board[i][j] = "X";
    }
  }
};

function outOfBounds(i, j, matrix) {
  return i < 0 || i > matrix.length - 1 || j < 0 || j > matrix[i].length - 1;
}
//if any 0s are found on the boundries reassign them to 2s and check if ther're more neighbors 0s attached to it
function reassignBoundryZeros(i, j, board) {
  if (!outOfBounds(i, j, board) && board[i][j] === "O") {
    board[i][j] = "2";
    reassignBoundryZeros(i + 1, j, board);
    reassignBoundryZeros(i - 1, j, board);
    reassignBoundryZeros(i, j + 1, board);
    reassignBoundryZeros(i, j - 1, board);
  } else return;
}
