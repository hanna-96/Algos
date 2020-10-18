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
