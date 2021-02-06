// Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.
// Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.
// A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)
// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
// Example 1:

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true
// Explanation:
// The first event can be booked.  The second can't because time 15 is already booked by another event.
// The third event can be booked, as the first event takes every time less than 20, but not including 20.

// Note:

// The number of calls to MyCalendar.book per test case will be at most 1000.
// In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

const MyCalendar = () => {
  this.events = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
//Time O(n^2),where n is the number of events booked. For each new event, we process every previous event to decide whether the new event can be booked.
//Space O(n)
MyCalendar.prototype.book = function (start, end) {
  // two events [s1, e1) and [s2, e2) do not conflict if and only if one of them starts after the other one ends
  for (let event of this.events) {
    //if the input start is supposed to start before the other ends=.check if the input end has already ended before the other metting started
    if (start < event[1] && end > event[0]) {
      return false;
    }
  }
  this.events.push([start, end]);
  return true;
};

//solution 2 (using a balanced Binary Tree)
//Time O(n log n);Space O(n)
var MyCalendar = function () {
  this.root = null;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

function Node(start, end) {
  this.s = start;
  this.e = end;
  this.left = null;
  this.right = null;
}

MyCalendar.prototype.book = function (start, end) {
  if (!this.root) {
    return (this.root = new Node(start, end));
  } else {
    let rec = (start, end, root) => {
      if (root.e <= start) {
        if (root.right) return rec(start, end, root.right);
        else {
          root.right = new Node(start, end);
          return true;
        }
      } else if (root.s >= end) {
        if (root.left) return rec(start, end, root.left);
        else {
          root.left = new Node(start, end);
          return true;
        }
      } else {
        return false;
      }
    };
    return rec(start, end, this.root);
  }
};
