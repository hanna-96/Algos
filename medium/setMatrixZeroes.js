// Given an m x n matrix. If an element is 0, set its entire row and column to 0.

var setZeroes = function (matrix) {
  //define a variable to keep track of all the rows that need to be filled  with zeros
  let rowsWithZeroes = new Array(matrix.length).fill(false);
  //define a variable to keep track of all the columns that need to be filled  with zeros
  let colWithZeroes = new Array(matrix[0].length).fill(false);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        //then set the element at rowWithZeroes to be true
        rowsWithZeroes[row] = true;
        colWithZeroes[col] = true; //set all the col to be true;
      }
    }
  }
  //firstly update ONLY the rows that need to be 0's

  for (let i = 0; i < rowsWithZeroes.length; i++) {
    if (rowsWithZeroes[i]) nullifyRow(matrix, i);
  }
  //then update ONLY the cols that need to be 0's

  for (let j = 0; j < colWithZeroes.length; j++) {
    if (colWithZeroes[j]) nullifyCol(matrix, j);
  }
};

function nullifyRow(matrix, row) {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
}
function nullifyCol(matrix, col) {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
}
