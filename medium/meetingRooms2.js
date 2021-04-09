// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
//  find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

//Time O(n log n) sorting
//Space O(n) storing rooms
var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  //sort the array by starting time
  intervals.sort((a, b) => a[0] - b[0]);
  //Initialize a new min-heap and add the first meeting's ending time to the heap.
  //We simply need to keep track of the ending times as that tells us when a meeting room will get free.
  let rooms = [intervals[0][1]]; //keep track of how many rooms are there currently

  for (let i = 1; i < intervals.length; i++) {
    //find the earliest end time of any meeting in the already occupied rooms
    //so that we check if it's over then we can use this room for another meeting
    // Has any previous meetings ended already so that we can occupy that room???
    let earliestEndTime = Math.min(...rooms); //20, 12, 19,11
    //if the room is free(the previous meeting is over)
    if (intervals[i][0] >= earliestEndTime) {
      // we extract the min earliest time from rooms arr and add it back with the ending time of the current meeting we are processing.
      rooms[rooms.indexOf(earliestEndTime)] = intervals[i][1];
    } else {
      // If not(if there's overlap=>no rooms available yet), then we allocate a new room and add it to the heap.
      rooms.push(intervals[i][1]);
    }
  }
  //by rooms.length we can determine how many rooms we have available
  return rooms.length;
};
//solution 2
/*
When we encounter an ending event, that means that some meeting that started earlier has ended now. 
We are not really concerned with which meeting has ended. All we need is that some meeting ended thus 
making a room available.
*/
var minMeetingRooms = function (intervals) {
  let start = [];
  let end = [];

  for (let interval of intervals) {
    start.push(interval[0]);
    end.push(interval[1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let rooms = 0;
  let max = 0;
  while (p1 < start.length) {
    // no meeting has ended yet so we need a new room
    if (start[p1] < end[p2]) {
      p1++;
      rooms++;
    } else {
      // some meeting has ended by the time the  current meeting starts
      // so we can reuse the room
      p2++;
      rooms--;
    }
    max = Math.max(rooms, max);
  }
  return max;
};
// solution 3 using heap
const minMeetingRooms = (times) => {
  if (times.length < 1) return 0;
  times.sort((a, b) => a[0] - b[0]);

  let laptops = [times[0]];
  let heap = new MinHeap(laptops);

  for (let i = 1; i < times.length; i++) {
    let currentInterval = times[i];
    if (currentInterval[0] >= heap.peek()[1]) heap.remove();
    heap.insert(currentInterval);
  }

  return laptops.length;
};

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  // O( n ) time , O(1) space
  buildHeap(array) {
    let parentIdx = Math.floor((array.length - 1 - 1) / 2);
    for (let currentIdx = parentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  // O(log n ) time , O(1) space
  // putting every element before parent to the right position in the heap
  siftDown(currentIdx, endIdx, heap) {
    let leftChildIdx = 2 * currentIdx + 1;
    while (leftChildIdx <= endIdx) {
      let rightChildIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (
        rightChildIdx !== -1 &&
        heap[rightChildIdx][1] < heap[leftChildIdx][1]
      ) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }
      if (heap[idxToSwap][1] < heap[currentIdx][1]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        leftChildIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  // O(log n ) time , O(1) space
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  // O(1) time , O(1) space
  peek() {
    return this.heap[0];
  }
  // O(log n ) time , O(1) space
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  // O(log n ) time , O(1) space
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(start, end, array) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
  }
}