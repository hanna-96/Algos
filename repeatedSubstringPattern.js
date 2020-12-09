// Given a non-empty string check if it can be constructed by taking a substring
// of it and appending multiple copies of the substring together.
// You may assume the given string consists of lowercase English letters
// only and its length will not exceed 10000.

// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
var repeatedSubstringPattern = function (s) {
  let middle = s.length / 2;
  for (let i = 0; i < middle; i++) {
    let subStr = s.slice(0, i + 1);
    //find a number of times we want to repeat current substring in order to get full length of s
    let times = s.length / subStr.length;
    if (Number(times) && times > 1) {
      if (subStr.repeat(times) === s) return true;
    }
  }
  return false;
};
