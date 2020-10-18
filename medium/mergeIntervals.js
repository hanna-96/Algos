// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
  if (!intervals.length) return [];
  //sort the array by starting time
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedArr = [intervals[0]]; //treating as a stack

  for (let i = 1; i < intervals.length; i++) {
    let previousInterval = mergedArr.pop();
    if (
      previousInterval[1] >= intervals[i][0] &&
      intervals[i][1] > previousInterval[1]
    ) {
      mergedArr.push([previousInterval[0], intervals[i][1]]);
    } else if (
      previousInterval[1] >= intervals[i][0] &&
      intervals[i][1] <= previousInterval[1]
    ) {
      mergedArr.push(previousInterval);
    } else {
      mergedArr.push(previousInterval, intervals[i]); //they don't overlap
    }
  }
  return mergedArr;
};
//time O(n log n);
//space O(n) as we're storing intervals in a new array
