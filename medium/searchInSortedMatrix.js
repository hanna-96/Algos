//You're given a 2D array(matrix) of integers and a target integer.
//Each row in the matrix is sorted as well as column.
//The matrix doesn't necessarily have the same height and width.
//Write a function that returns an array of the row and column indices of the target integer if it's contained in matrix.
//Otherwise return [-1,-1]

//Input : [
//[1,4,7,12,15,1000],
//[2,5,19,31,32,1001],
// [3,8,24,33,35,1002],
// [40,41,42,44,45,1003],
//[99,100,103,106,128,1004]
// ]
//target = 44
//Output [3,3]
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  //pointers approach
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return [row, col];
    else if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    }
  }
  return [-1, -1];
}
//time O(n+m)
//Space O(1)
