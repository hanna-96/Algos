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


imal space solution
//Time O(M * N); Space O(1)
var setZeroes = function (matrix) {
  /*
        1) iterate over the matrix, if the value is 0 then mark  the first cell of a row  matrix[i][0] to be 0 and
         the first cell of a column matrix[0][j] to be 0.  Later If the first cell of a row is set to zero this means the row should be marked zero. 
        Or If the first cell of a column is set to zero this means the column should be marked zero
        2) iterate over the matrix again but this time starting from i = 1 and j = 1,
        we do this, so we won't lose reference to the col and rows that have to be
        change to 0
        3) we have one more edge case, we need to check if the first row and col
        were initially 0 before we set them up to be, if so change the whole row or col
        to 0
    */
  let n = matrix.length;
  let c = matrix[0].length;
  let firstCol = false; // this flag would determine whether column has been set to zero.

  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === 0) firstCol = true;
    for (let j = 0; j < c; j++) {
      // If an element is zero, we set the first element of the corresponding row and column to 0
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // mark the current row(later all the cells will be set to 0 s)
        matrix[0][j] = 0; // mark the current col(later all the cells will be set to 0 s)
      }
    }
  }
  //   Iterate over the array once again and using the first row and first column, update the elements.
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < c; j++) {
      // check if we marked current row or col before
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  // check if the first row needs to be set to zero as well
  if (matrix[0][0] === 0) {
    for (let i = 0; i < c; i++) {
      matrix[0][i] = 0;
    }
  }
  // check if the first column needs to be set to zero as well
  if (firstCol) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
};
