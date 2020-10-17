// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Example 1:

// Input: [[0,30],[5,10],[15,20]]
// Output: false

// The idea here is to sort the meetings by starting time.
//Then, go through the meetings one by one and make sure that each meeting ends before the next one starts.

function meetingRooms(arr) {
  //GOAL is to find overlaping elements
  //1. sort the meeting by starting time
  arr.sort((a, b) => a[0] - b[0]);

  //2. need to keep track of our end times
  //assign the end interval to be the first end interval(1st el from arr)
  //while looping it might change

  let end = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    if (end > arr[i][0]) return false; //means that there's an overlap(the next meeting starts before the previous one finishes)
    if (end < arr[i][1]) end = arr[i][1]; //check if the current end interval is less then the next end =>if so reassign it to a new end
  }
  return true;
}
