// Given an m x n board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells,
// where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input 1: board = [["A","B","C","E"],
//                 ["S","F","C","S"],
//                 ["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input 2  board = [["A","B","C","E"],
// ["S","F","C","S"],
// ["A","D","E","E"]], word = "ABCB"
// Output: false

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      //if we found the 1st mathching letter and ALL the remaining adjacent letters
      if (board[i][j] === word[0] && exploreNeighbours(i, j, 0, board, word)) {
        return true;
      }
    }
  }
  return false;
};

function exploreNeighbours(i, j, idx, board, word) {
  //if we found all the letters from the word =>easily return true;
  if (idx === word.length) return true;

  //edge case
  //     check the boundries  OR if the letter is not a match(to stop recursion)
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    word[idx] !== board[i][j]
  )
    return false;

  //mark as visited
  let temp = board[i][j];
  board[i][j] = " ";
  if (
    exploreNeighbours(i + 1, j, idx + 1, board, word) ||
    exploreNeighbours(i - 1, j, idx + 1, board, word) ||
    exploreNeighbours(i, j + 1, idx + 1, board, word) ||
    exploreNeighbours(i, j - 1, idx + 1, board, word)
  ) {
    return true;
  }
  //     set the current letter back to it
  board[i][j] = temp;

  return false;
}
