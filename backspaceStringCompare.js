Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".



//Time O(m+n),where m is the length of S,  and n - is the length of T;
//Space O(m+n)
var backspaceCompare = function (S, T) {
  //iterate theouhght str1 and create its new version without deleted chars
  //do the same with string2
  //compare them
  let stack1 = [];
  //push char to stack and compare the next el
  //if next el is "#" then pop the last from stack
  //if nect el is not "#" push char to stack

  for (let char of S) {
    if (char === "#") {
      stack1.pop();
    } else {
      stack1.push(char);
    }
  }
  let stack2 = [];
  for (let char of T) {
    if (char === "#") {
      stack2.pop();
    } else {
      stack2.push(char);
    }
  }
  return stack1.join("") === stack2.join("");
};
