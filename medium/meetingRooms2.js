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
const minMeetingRooms = (intervals) => {
  const   compareFunc = (a, b) => a - b,
          minHeap = new MinHeap(compareFunc);
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  let maxRooms = 0;
  
  intervals.forEach(interval => {
      if(minHeap.size > 0 && minHeap.peek() <= interval[0]) {
          minHeap.extract();
      }
      
      minHeap.insert(interval[1]);
      
      maxRooms = Math.max(maxRooms, minHeap.size);
  });
  
  return maxRooms;
};

// since JS does not have a native heap, 
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
  constructor(compareFunc) {
      this.compareFunc = compareFunc;
      this.heap = [];
  }
  
  insert(val) {
      this.heap.unshift(val);
      this.heap.sort(this.compareFunc);
  }
  
  extract() {
      if (this.size === 0) return null;
      return this.heap.shift();
  }
  
  peek() {
      if(this.size === 0) return null;
      return this.heap[0];
  }
  
  get size() {
      return this.heap.length;
  }
}