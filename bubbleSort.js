//write a func that takes in an array of integers and returns a siorted version of the array.
//Use the bubble sort
//Input [8,5,2,9,5,6,3]
//Output [2,3,5,6,8,9];

//optimal solution1
function bubbleSort(array) {
  // Write your code here.
  let noSwaps; //prevents loop from keeping extra iterating when the array is sorted already
  for (let i = array.length; i >= 0; i--) {
    //makes less iterations
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(array,array[j],array[j+1])
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}
//Time O(n)
//Space O(1)
//optimal solution2
function bubbleSort(array) {
  // Write your code here.
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (let j = 0; j < array.length - 1 - counter; j++) {
      //because no need to check the last integer after each iteration(it will be always the largest)
      //dissadvantage is that it iterates more than needed
      ////takes more time
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        sorted = false;
      }
    }
    counter++;
  }
  return array;
}
const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
  // let temp = array[j];
  // array[j] = array[i];
  // array[i] = temp;
};
//Best Time O(n)(when ythe inpout arrays is already sorted)
//average Time O(n^2)
//Space O(1)
//solution 2
function bubbleSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
//Time O(n^2)
//Space O(1)
