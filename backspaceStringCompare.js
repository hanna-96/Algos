// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

//Time O(m+n),where m is the length of S,  and n - is the length of T;
//Space O(m+n)
//Time O(m+n),where m is the length of S,  and n - is the length of T;
//Space O(m+n)
var backspaceCompare = function (S, T) {
  const stringWithoutDeletedLetters = (str) => {
    let stack = [];

    for (let char of str) {
      if (char === "#") stack.pop();
      else stack.push(char);
    }
    return stack.join("");
  };
  return stringWithoutDeletedLetters(S) === stringWithoutDeletedLetters(T);
};
