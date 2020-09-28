//write a func that takes in an array of integers and returns a sorted version of the array.
//Use the selection sort
//Input [8,5,2,9,5,6,3]
//Output [2,3,5,6,8,9];

//******  optimal solution ******
//Time O(n^2),where n -> is the length of the array
//Space O(1) because we're sorting in place
function selectionSort(array) {
  // Write your code here.
  let min = 0;
  //because eventually the last num will be anyways the greatest
  //so no need in extra iteration
  while (min < array.length - 1) {
    for (let i = min + 1; i < array.length; i++) {
      if (array[min] > array[i]) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
      }
    }
    min++;
  }
  return array;
}

//option 2
function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    //from start the smallest value will be at index i(0)
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(i, j);
      if (array[j] < array[min]) {
        // swap(i,j,array)
        min = j;
      }
    }
    //if the min is the same as i there's no need to swap
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
//option 3
function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    //from start the smallest value will be at index i(0)
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(i, j);
      if (array[j] < array[min]) {
        let temp = array[j];
        array[j] = array[min];
        array[min] = temp;
      }
    }
  }
  return array;
}
