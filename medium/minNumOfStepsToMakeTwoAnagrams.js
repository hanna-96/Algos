// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Example 1:

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// Example 2:

// Input: s = "leetcode", t = "practice"
// Output: 5
// Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.

/*
Store all letters from s and their frequency in hash map
Loop through t and check if we have the same letter in map =>then just decrement the count and go ahead
If we don't have this letter in map => total++. as we'll need this letter
Time O(n), Space O(1), since there are only 26 letters in alphabet
*/
var minSteps = function (s, t) {
  let total = 0;
  const map1 = new Map();

  for (let char of s) {
    map1.set(char, map1.get(char) + 1 || 1);
  }

  for (let letter of t) {
    if (!map1.get(letter)) {
      total++;
    } else {
      let count = map1.get(letter);
      count--;
      map1.set(letter, count);
    }
  }
  return total;
};
