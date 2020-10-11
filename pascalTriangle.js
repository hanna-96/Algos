//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it.
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
//time O(n^2)
// Space O(n);
function pascalTriangle(numOfRows) {
  let finalArray = [];
  //the 1st row will always be [1];
  finalArray.push([1]);
  for (let i = 1; i < numOfRows; i++) {
    let prevRow = finalArray[i - 1];
    //new row will always start with 1 and end with 1
    let newRow = [1];
    //we need to figure out how many and what will be in between them([1,....1];)
    //to figure this out we need to compare the elements in thr row above
    //PS we start j from 1 because we alreaydy have an element in our newRow([1])
    for (let j = 1; j < prevRow.length; j++) {
      //every element is the SUM of the two elements above it: One with the index which is less than current and another with the same index
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }
    //still need to add 1 at the end
    newRow.push(1);
    finalArray.push(newRow);
  }
  return finalArray;
}
console.log("result", pascalTriangle(5));
