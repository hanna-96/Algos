// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.
// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

//Time O(n).Space O(1)
var titleToNumber = function (columnTitle) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = alphabet.indexOf(columnTitle[0]);
  for (let i = 1; i < columnTitle.length; i++) {
    result = result * 26 + alphabet.indexOf(columnTitle[i]);
  }
  return result;
};

//solution 2
var titleToNumber = function (columnTitle) {
  let res = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    res = res * 26 + columnTitle.charCodeAt(i) - 64;
  }
  return res;
};
