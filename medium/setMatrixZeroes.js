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

// optimal space solution
//Time O(M * N); Space O(1)
//Time O(M*N);Space O(1)
var setZeroes = function (matrix) {
  /*
      1) iterate over the matrix, if the value is zero then mark [i,0] to be 0 and
      [0,j] to be 0 it will be our reference in the future
      2) iterate over the matrix again but this time starting from i = 1 and j = 1,
      we do this, so we won't lose reference to the col and rows that have to be
      change to 0
      3) we have one more edge case, we need to check if the first row and col
      were initially 0 before we set them up to be, if so change the whole row or col
      to 0
  */
  let n = matrix.length;
  let c = matrix[0].length;
  let firstRowSetToZero = false;
  let firstColSetToZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRowSetToZero = true;
        if (j === 0) firstColSetToZero = true;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  // It is important to start from 1st row and 1 st col, so that the oth row cells and 0th col cells don't mutate the matrix
  // Because if we nullify elements in 0th row or 0 th col =>all other cells will be nullified, BUT WE DONOT WANT IT
  // So we'll nullify 0th row and 0 th col at the very end
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRowSetToZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (firstColSetToZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
};
