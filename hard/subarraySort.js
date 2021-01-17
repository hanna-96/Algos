//    Write a function that takes in an array of at least two integers and that
//   returns an array of the starting and ending indices of the smallest subarray
//   in the input array that needs to be sorted in place in order for the entire
//   input array to be sorted (in ascending order).
//  If the input array is already sorted, the function should return [-1, -1]

//Input:  = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
//Output: = [3,9]

//Time O(n); Space O(1)
function subarraySort(array) {
  // Write your code here.
  let largestNum = -Infinity;
  let smallestNum = Infinity;
  //there always will be AT LEAST 2 unsorted numbers
  //the sub arr that we'll have to sort will depend on the positions of the unsorted numbers

  //loop through input arr
  //check the prev num and current; current and next num
  //if curr is < prev  || cur is > next => that's start of unsorted subArr

  //find all the unsorted nums
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(i, num, array)) {
      smallestNum = Math.min(smallestNum, num); //  6
      largestNum = Math.max(largestNum, num); //12
      // console.log('smallest',smallestNum)
      // console.log('largest',largestNum)
    }
  }
  //if we never found and out of order num or sumArr=>it means array is already sorted
  if (smallestNum === Infinity) return [-1, -1];

  let subArrLeftIdx = 0;
  //find how far if the smallest unsorted num is from its correct position starting from the beginning
  //and then return that index
  while (smallestNum >= array[subArrLeftIdx]) {
    subArrLeftIdx++; //1 2 3
  }
  let subArrRightIdx = array.length - 1;
  //find how far if the largest unsorted num is from its correct position starting from the end
  //and then return that index
  while (largestNum <= array[subArrRightIdx]) {
    subArrRightIdx--; // 11 10 9
  }
  return [subArrLeftIdx, subArrRightIdx];
}

function isOutOfOrder(i, num, array) {
  //compare the current num to its adjacent neighbours
  if (i === array.length - 1) return array[i - 1] > num;
  if (i === 0) return array[i + 1] < num;
  // console.log(array[i-1],' and num is',num)
  // console.log(' num is',num,'and next is', array[i+1])
  return array[i - 1] > num || array[i + 1] < num;
}
