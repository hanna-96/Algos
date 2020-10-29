//Given 2 sorted arrays merge them into one array where all elements are in ascending order.
// [1,3,5]   [1,5,9,11]
// [ 1,1,3,5,5,9,11]

function mergeArr(arr1, arr2) {
  // return [...arr1,...arr2].sort((a,b)=>a-b);  //O(n log n) ->slow
  let finalArr = [];
  let firstIdx = 0;
  let secondIdx = 0;
  let k = 0;

  while (firstIdx < arr1.length && secondIdx < arr2.length) {
    if (arr1[firstIdx] < arr2[secondIdx]) {
      // the lesser element will be shifted to the result arr
      finalArr[k] = arr1[firstIdx];
      firstIdx++;
      k++;
    } else {
      finalArr[k] = arr2[secondIdx];
      secondIdx++;
      k++;
    }
  }
  //if there're still some elements left in arr1 ->add it to the final array
  while (firstIdx < arr1.length) {
    finalArr[k] = arr1[firstIdx];
    k++;
    firstIdx++;
  }
  //if there're still some elements left in arr2 ->add it to the final array

  while (secondIdx < arr2.length) {
    //shortcut
    finalArr[k++] = arr2[secondIdx++];
  }
  return finalArr;
}
//Time O(n)
//space O(n)
// console.log(mergeArr([1, 3, 5], [9, 11]));
