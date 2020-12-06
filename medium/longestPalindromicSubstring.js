//   Write a function that, given a string, returns its longest palindromic
//   substring.
//   A palindrome is defined as a string that's written the same forward and
//   backward. Note that single-character strings are palindromes.
// You can assume that there will only be one longest palindromic substring.
//Input: = "abaxyzzyxf"
//Outpur: "xyzzyx"

//solution 1
//time O(n^3);space O(n)
function longestPalindromicSubstring(string) {
  // Write your code here.
  let longestStr = "";

  for (let i = 0; i < string.length; i++) {
    let curLong = "";
    for (let j = i; j < string.length; j++) {
      let curSubStr = string.slice(i, j + 1);
      console.log("longest", longestStr);

      console.log("curSubst", curSubStr);
      if (isPalindrome(curSubStr)) {
        curLong = curSubStr;
      }
    }
    if (longestStr.length < curLong.length) {
      longestStr = curLong;
    }
  }

  return longestStr;
}
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}
