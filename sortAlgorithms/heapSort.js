//   Write a function that takes in an array of integers and returns a sorted
//   version of that array. Use the Heap Sort algorithm to sort the array.
//Input  = [8, 5, 2, 9, 5, 6, 3]
//Output [2, 3, 5, 5, 6, 8, 9]
//Time O(n log n); Space O(1)
function heapSort(array) {
  //build max heap out of the input array
  buildHeap(array);
  //start looping backwards because with each iteration we'll always swap the last element from heap with the
  //0th element from heap
  //Note: go until idx 1 because eventually the number at 0th idx will be at its final sorted position
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    //with each iteration swap the 0th number with the last num in heap
    swap(0, endIdx, array);
    //after we swapped, sift down (put in the correct position) the new 0th number
    siftDown(0, endIdx - 1, array);
  }
  return array;
}

function buildHeap(array) {
  let firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let i = firstParentIdx; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
}

function siftDown(currentIdx, endIdx, array) {
  //find two children
  //compare the value of the current number to each child
  //pick one child that is larger(because we're using maxHeap)
  let leftChildIdx = currentIdx * 2 + 1;
  //while childLeft is still located in the heap
  while (leftChildIdx <= endIdx) {
    //calculate rightChild Idx but firstly check if its in the heap
    let rightChildIdx;
    if (currentIdx * 2 + 2 <= endIdx) {
      rightChildIdx = currentIdx * 2 + 2;
    } else rightChildIdx = -1;

    //So if we have a rightChild AND if it is > the left child, then we'll swap with rightChild
    let idxToSwap;
    if (rightChildIdx > -1 && array[rightChildIdx] > array[leftChildIdx]) {
      idxToSwap = rightChildIdx;
    } else {
      idxToSwap = leftChildIdx; //swap with the leftChild because it's >
    }

    if (array[idxToSwap] > array[currentIdx]) {
      swap(currentIdx, idxToSwap, array);

      currentIdx = idxToSwap; //set currentIdx to be idxToSwap, because the swapped node is now located at
      //idxToSwap and we will keep comparing it further with other  numbers in heap
      leftChildIdx = currentIdx * 2 + 1;
    } else {
      //if our current number is not < than either of irts children=>it means that it's at correct position
      return;
    }
  }
}
function swap(i, j, array) {
  let swap = array[i];
  array[i] = array[j];
  array[j] = swap;
}
