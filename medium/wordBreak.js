// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Time O(n^3); size of recursion tree can go up to n ^2, Space O(n); depth of recursion tree
var wordBreak = function (s, wordDict, memo = {}) {
  if (s.length === 0) return true;
  for (const word of wordDict) {
    const substr = s.substring(0, word.length); // leet
    if (substr === word) {
      const nextSubStrToExplore = s.slice(word.length); // code
      let isFound;
      if (memo[nextSubStrToExplore] === undefined) {
        isFound = wordBreak(nextSubStrToExplore, wordDict, memo);
        memo[nextSubStrToExplore] = isFound; // will be either true or false
      } else {
        isFound = memo[nextSubStrToExplore];
      }
      if (isFound) return true;
    }
  }
  return false;
};
