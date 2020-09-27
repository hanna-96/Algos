//write function that takes in an array of at least 3 integers and
//without sorting the input arr
//returns a sorted arr of three largest integers from  input arr
//Function should return dublicate integers if necessary
//input [10,5,9,12] -> output [10,10,12]
//input [141,1,17,-7,-17,-27,18,541,8,7,7] -> output [18,141,541]
function findThreeLargestNumbers(array) {
  // initially the final arr will contain 3 null values
  //assuming it is already sorted(based on prompt)
  //so the last num will be always the largest
  const largestNumbers = [null, null, null];
  //loop through input arr
  for (let num of array) {
    // for(let el of largestNumbers)
    if (num > largestNumbers[2] || largestNumbers[2] === null) {
      //if so then we need to shift the second largest num to be the 1st
      //largest num,(we no longer need the 1st before)
      largestNumbers[0] = largestNumbers[1]; //no more previous 0th num
      largestNumbers[1] = largestNumbers[2]; //shifting 2th num to the 1st position;
      largestNumbers[2] = num; //2nd becomes a new largest num
    } else if (num > largestNumbers[1] || largestNumbers[1] === null) {
      largestNumbers[0] = largestNumbers[1];
      largestNumbers[1] = num;
    } else if (num > largestNumbers[0] || largestNumbers[0] === null) {
      largestNumbers[0] = num;
    }
  }
  return largestNumbers;
}
// console.log("result is", findThreeLargestNumbers([10, 10, 9, ,120,12]));
