//Given an array og integers and an integer write a functiom that moves
//all instances of that integer from the arry to the end of the array and return the array.
//Function should do it in place and it doesn need to maintain the order of other integers.

//Input [2,1,2,2,2,3,4,2]  2
//Output [1,3,4,2,2,2,2,2]

//Time O(n);
//Space O(1)
function moveElementToEnd(array, toMove) {
  // Write your code here.
  let p2 = array.length - 1;
  let p1 = 0;
  while (p1 < p2) {
    if (array[p2] === toMove) {
      p2--;
    } else if (array[p1] !== toMove) {
      p1++;
    } else if (array[p1] === toMove) {
      //if the element at the end is !== toMove BUT elements at the beginning === toMove
      //then we know we have to swap them(el from the end will go to the beginning)
      //and el from beginning will go to the end
      let temp = array[p2];
      array[p2] = array[p1];
      array[p1] = temp;
      p1++;
      p2--;
    }
  }
  return array;
}
