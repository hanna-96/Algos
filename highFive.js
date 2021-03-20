// Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

// Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

// A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

// Example 1:

// Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
// The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.

//Time O(n log n);
//Space O(n);space used by res array
var highFive = function (items) {
  let map = new Map();
  let res = [];

  for (let [student, score] of items) {
    if (!map.has(student)) map.set(student, [score]);
    else map.get(student).push(score);
  }
  for (let [student, scores] of map.entries()) {
    let top5Scores = scores.sort((a, b) => b - a).slice(0, 5);
    let total = top5Scores.reduce((acc, cur) => acc + cur, 0);
    let average = Math.floor(total / 5);
    res.push([student, average]);
  }
  return res.sort((a, b) => a[0] - b[0]);
};
