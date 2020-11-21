//Given an array of integers and another array of three distict ingers.
//The first array is guaranteed to contain only those integers that are in the second arr.
//And the second array represents a desired order for the integers in the first array.
// Write a fucntion that sorts the first array according to the desired order in the second array.

//Input; array:[1,0,0,-1,-1,0,1,1]
//       order:[0,1,-1]
// Output:[0,0,0,1,1,1,-1,-1]

//Time O(n)
//Space O(1)
function threeNumberSort(array, order) {
  // Write your code here.
  //loop from start and sort so that all integers that are === to order[0]
  //will be at the beginning
  let start = 0; //start will always be pointing to !== integer from order array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      let swap = array[i];
      array[i] = array[start];
      array[start] = swap;
      start++;
    }
  }
  //now once we have ann array with all needed numbers at the beginning
  //lets check the last ones
  let end = array.length - 1; //will always be pointing to !== integer from order array
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === order[2]) {
      let swap = array[i];
      array[i] = array[end];
      array[end] = swap;
      end--;
    }
  }
  return array;
}

//option 2 (Bucket sort)

//create 3 buckets(1 for each unique integer from order array)

//while looping over the 1st array  we will store in buckets how many (0,1,-1) are there in array

//option3 (Iterating only 1 time!!!)

function threeNumberSort(array, order) {
  // Write your code here.
  let firstIdx = 0; //a place where will be for all 0 s
  let secondIdx = 0; //a place where all 1 s will be sored
  let thirdIdx = array.length - 1; //all -1

  while (secondIdx <= thirdIdx) {
    //if we are at integer 0 then nevermind, move on
    if (array[secondIdx] === order[0]) {
      let swap = array[firstIdx];
      array[firstIdx] = array[secondIdx];
      array[secondIdx] = swap;
      secondIdx++;
      firstIdx++; //we'll move firstIdx ONLY after we swap and put 0 to the beginning
      //we are sure that if we find another 0 we'll sawp it with the one at firstIdx
    } else if (array[secondIdx] === order[1]) {
      secondIdx++;
    } else {
      let swap = array[thirdIdx];
      array[thirdIdx] = array[secondIdx];
      array[secondIdx] = swap;
      thirdIdx--;
    }
  }
  return array;
}
