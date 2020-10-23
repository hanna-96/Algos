// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

//1.traverse the borders of the arr(perimeter)
//Time O(n);
// space O(n) - n is the total number of elements in the array
function spiralTraverse(array) {
  // Write your code here.
  //1.start from el[i][0] visit all i's elements(push them to the output arr);
  //2.once we're at the last element from the 1st row(last j)->start going down(i+1)
  //but j stays the same(the last)
  //3.once we reached the last i ->visit all left elements on that i(j-1)
  //4.once j===0 ->go up(i-1) UNTILL the visited node
  let finalArr = [];
  let startingRow = 0;
  let startingCol = 0;
  let endingRow = array.length - 1;
  let endingCol = array[0].length - 1;

  while (startingRow <= endingRow && startingCol <= endingCol) {
    //looping through the 1st(Oth) row till the end(last col)
    for (let i = startingCol; i <= endingCol; i++) {
      finalArr.push(array[startingRow][i]);
    }
    //looping down
    for (let j = startingRow + 1; j <= endingRow; j++) {
      finalArr.push(array[j][endingCol]);
    }
    //loop left in reverse order
    for (let f = endingCol - 1; f >= startingCol; f--) {
      //edge case
      //if there's a single row left in the middle og matrix
      //then we don't need to to iterate over it and double count the values
      if (startingRow === endingRow) break;
      finalArr.push(array[endingRow][f]);
    }
    for (let k = endingRow - 1; k > startingRow; k--) {
      //edge case if there's a single col left no need to count again the already counted valiues
      if (startingCol === endingCol) break;
      finalArr.push(array[k][startingCol]);
    }
    startingRow++;
    endingRow--;
    startingCol++;
    endingCol--;
  }
  return finalArr;
}
