// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//solution potimal (sliding window)
// Time O(n);Space O(m)
var lengthOfLongestSubstring = function (s) {
  let set = new Set(); //use set as only unique letters can be stored there
  let left = 0;
  let right = 0;
  let longest = 0;

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      longest = Math.max(longest, set.size);
      right++;
    } else {
      set.delete(s[left]);
      a;
      left++;
    }
  }
  return longest;
};

// naive solution
var lengthOfLongestSubstring = function (s) {
  let maximum = 0;
  let currentMax = 0;
  let array = [];
  let p = 0;
  while (p < s.length) {
    while (array.indexOf(s[p]) !== -1) {
      array.shift();
    }
    array.push(s[p]);
    currentMax = array.length;
    p++;
    if (currentMax > maximum) maximum = currentMax;
  }
  return maximum;
};
