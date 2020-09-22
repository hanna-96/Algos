//Given two arrays of integers ,write a function that determines whether the second array is a subsequence of the first one.
//ex: array =[5,1,22,25,6,-1,8,10]
//   sequence = [1,6,-1,10]
//Output TRUE

//option 1
//time O(n); space O(1);
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrPointer = 0;
  let seqPointer = 0;
  //loop over main arry  until we reach the end of it OR untill we reached the end of sequence
  while (arrPointer < array.length && seqPointer < sequence.length) {
    if (array[arrPointer] === sequence[seqPointer]) {
      seqPointer++;
    }
    arrPointer++;
  }
  return seqPointer === sequence.length;
}

//option 2
function isValidSubsequence(array, sequence) {
  // Write your code here.
  //initialize a pointer to keep track of elements in the sequence array
  let currentPosition = 0;
  //lets loop over the main array until we find the element to which the pointer is ponting
  for (let i = 0; i < array.length; i++) {
    //if we go all the wa
    if (sequence.length === currentPosition) return true;
    //only if we find a matching number then move to the next el in sequence arr
    //if the integer is not === then keep looping
    if (array[i] === sequence[currentPosition]) {
        //move to next integer in seq arr
      currentPosition++;
    }
  }
  if (currentPosition === sequence.length) return true;
  else return false;
}
