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
//Optimal solution
//Time O(n^2);Space O(n)
function longestPalindromicSubstring(string) {
  //let's expand from the center of letter to the left and to the right and check for palindrome
  //we'll check every center of a potential palindrome
  //if length of string is Odd =>we'll have letter in the center;
  // ''if length is EVEN => we won't have letter in center
  let currentLongest = [0, 1];
  for (let i = 0; i < string.length; i++) {
    const even = isPalindrome(string, i, i);
    const odd = isPalindrome(string, i, i + 1);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}
function isPalindrome(str, left, right) {
  while (left >= 0 && right <= str.length) {
    if (str[left] !== str[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}
