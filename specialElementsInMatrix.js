// Given a matrix of size m * n, m denotes the row starting with index 0 and n denotes the column starting with index 0.
// The matrix will hold distinct integers as elements.

// We need to find the distinct number of positional elements which are either the minimum or maximum in their corresponding row or column. Please return -1 if any row or any column has multiple minimum or maximum elements.

// For example, given a matrix of size 3 * 3, the elements are stored as follows:
// [
//     [1, 3, 4],
//     [5, 2, 9],
//     [8, 7, 6],
//   ]
// Expected output: 7

// In above example, we identified the output as 7 based on below:

// 1 - Minimum in row and column
// 4 - Maximum in row
// 2 - Minimum in row and column
// 9 - Maximum in row and column
// 8 - Maximum in row and column
// 7 - Maximum in column
// 6 - Minimum in row
// Input:

// m - integer - number of rows
// n - integer - number of columns
// m x n matrix

function specialElementsInMatrix(matrix) {
    let total = 0;
    //   each array is going to store maximum of  i-th row or j th column
    let minRow = new Array(matrix.length);
    let maxRow = new Array(matrix.length);
    let minCol = new Array(matrix[0].length);
    let maxCol = new Array(matrix[0].length);
  
    // Find curMinRow and curMaxRow for every row
    for (let i = 0; i < matrix.length; i++) {
      let curMaxRow = -Infinity;
      let curMinRow = Infinity;
  
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > curMaxRow) {
          curMaxRow = matrix[i][j];
        }
        if (matrix[i][j] < curMinRow) {
          curMinRow = matrix[i][j];
        }
      }
      maxRow[i] = curMaxRow;
      minRow[i] = curMinRow;
    }
    // Find curMinCol and curMaxCol for every column
    for (let j = 0; j < matrix[0].length; j++) {
      let curMinCol = Infinity;
      let curMaxCol = -Infinity;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] > curMaxCol) {
          curMaxCol = matrix[i][j];
        }
        if (matrix[i][j] < curMinCol) {
          curMinCol = matrix[i][j];
        }
      }
      maxCol[j] = curMaxCol;
      minCol[j] = curMinCol;
    }
    // Check for optimal element
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (
          matrix[i][j] === maxRow[i] ||
          matrix[i][j] === minRow[i] ||
          matrix[i][j] === maxCol[j] ||
          matrix[i][j] === minCol[j]
        ) {
          total++;
        }
      }
    }
    return total;
  }
  