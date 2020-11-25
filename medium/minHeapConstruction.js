//design a min heap class with all the necessary methods.

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  //time O(n); space O(1)
  buildHeap(array) {
    // Write your code here.
    //find the first parent idx
    let parentIdx = Math.floor((array.length - 1 - 1) / 2);
    //start calling sifting down on the first potential parent
    for (let idx = parentIdx; idx >= 0; idx--) {
      this.siftDown(idx, array.length - 1, array);
      //every time we call sift down it compares the parent with its left and right children
      //then switched the position if necessary
      //and then idx-- =>goest to the next (previous) parent
    }
    return array;
  }
  //time O( log(n); space O(1)
  siftDown(currentIdx, endIdx, heap) {
    let leftChildIdx = 2 * currentIdx + 1;
    let rightChildIdx;
    let curEl = heap[currentIdx];
    //as soon as our current node does not have a child any more we can break out from the. loop
    while (leftChildIdx <= endIdx) {
      //check if rightChild actually exists
      if (currentIdx * 2 + 2 <= endIdx) {
        rightChildIdx = 2 * currentIdx + 2;
      } else {
        rightChildIdx = -1;
      }
      let newIdxToSwap;
      //so if we have a rightChildIdx and rightChild is smaller that the LEFT CHILD
      if (rightChildIdx !== -1 && heap[rightChildIdx] < heap[leftChildIdx]) {
        newIdxToSwap = rightChildIdx;
      } else {
        newIdxToSwap = leftChildIdx;
      }
      //now let's compare the child with the curent value
      if (heap[newIdxToSwap] < heap[currentIdx]) {
        let temp = heap[currentIdx];
        heap[currentIdx] = heap[newIdxToSwap];
        heap[newIdxToSwap] = temp;

        currentIdx = newIdxToSwap;
        //recalculate leftChildIdx
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }
  //time O(log(n); space O(1)
  siftUp(idx, heap) {
    // Write your code here.
    let curEl = heap[idx];
    //finding a potential first parent of the element we just inserted to the heap
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0 && curEl < heap[parentIdx]) {
      heap[parentIdx] = curEl;
      curEl = heap[parentIdx];
      //now we'll be working with a new position because we shifted the el we inserted
      idx = parentIdx;
      //and then continue comparing it to a new parent UNTIL we reach the top of the heap OR
      //once we founf the correct spot for this element
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  //time O(1); space O(1)
  peek() {
    // Write your code here.
    return this.heap[0];
  }
  //time O(log(n); space O(1)
  remove() {
    // Write your code here.
    //instead of min root we place the last value from heap
    // remove root
    let root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = root;
    let elToRemove = this.heap.pop();
    //so once we reassigned the root we need to sink it down to the right position in the heap
    //starting from the root (index 0)
    this.siftDown(0, this.heap.length - 1, this.heap);
    return elToRemove;
  }
  //time O(log(n); space O(1)
  insert(value) {
    // Write your code here.
    this.heap.push(value);
    //we'll start sifting up from the very last el we just inserted in the heap
    this.siftUp(this.heap.length - 1, this.heap);
  }
}
