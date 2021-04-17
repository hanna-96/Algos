
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
// Brute force solution Time O(n^3); Space O(1)
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = s.slice(i, j + 1);
      if (isPalindrome(substr)) count++;
    }
  }
  return count;
};

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left <= right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}
//Optimal solution
//Time O(n^2); Space O(1)
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    isPalindrome(s, i, i); // odd length
    isPalindrome(s, i, i + 1); //even length
  }
  function isPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
    return count;
  }
  return count;
};
