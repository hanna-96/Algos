
// Time O((R∗C) ^2), where R,C is the number of rows and columns in board. 
// We need O(R∗C) to scan the board, and we might crush only 3 candies repeatedly.
//Space O(1), edit board in place
const candyCrush =  (board) =>{
  let adjacentNeighbors = [];
  getAdjacentNeighbors(board, adjacentNeighbors);
  if (!adjacentNeighbors.length) return board;
  markCells(adjacentNeighbors, board);
  dropCandies(board);
  return candyCrush(board);
};

function getAdjacentNeighbors(board, adjacentNeighbors) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] !== 0 &&
        i < board.length - 2 &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 2][j]
      ) {
        adjacentNeighbors.push([i, j], [i + 1, j], [i + 2, j]);
      }
      if (
        board[i][j] !== 0 &&
        j < board[i].length - 2 &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i][j + 2]
      ) {
        adjacentNeighbors.push([i, j], [i, j + 1], [i, j + 2]);
      }
    }
  }
}
function markCells(adjacentNeighbors, board) {
  let markedCells = [];
  for (let [i, j] of adjacentNeighbors) {
    board[i][j] = 0;
  }
  return markedCells;
}
function dropCandies(board) {
  for (let j = 0; j < board[0].length; j++) {
    let start = board.length - 1;
    let end = board.length - 1;
    while (end >= 0) {
      if (board[end][j] !== 0) {
        let temp = board[end][j];
        board[end][j] = board[start][j];
        board[start][j] = temp;
        start--;
      }
      end--;
    }
  }
}
