//Given a string, find the first non-repeating character in it and return its index.
// If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

//time O(n)
var firstUniqChar = function (s) {
  let memo = {};
  for (let i = 0; i < s.length; i++) {
    if (!memo[s[i]]) {
      memo[s[i]] = 1;
    } else {
      memo[s[i]] += 1;
    }
  }
  //we have to loop again to find the 1st letter which is stored in memo with a value 1!
  for (let i = 0; i < s.length; i++) {
    if (memo[s[i]] === 1) return i;
  }
  return -1;
};
//solution 2 using ES6 map
const firstUniqChar = (s) => {
  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) map.set(char, 1);
    else map.set(char, map.get(char) + 1);
  }
  for (let [char, count] of map) {
    if (count === 1) return s.indexOf(char);
  }

  return -1;
};
