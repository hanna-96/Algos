// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters,
//  and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.
//  It is guaranteed the answer is unique.
// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

//space O(n) as we are storing letters in stack
//time O(n) where n ->letters in the input string
var removeDuplicates = function (S) {
  let stack = [S[0]];
  // console.log('stack is',stack)
  for (let i = 1; i < S.length; i++) {
    //   console.log('comparing' , stack[stack.length-1],S[i])
    if (S[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
    //    console.log('stack after',stack)
  }
  return stack.join("");
};
removeDuplicates("abbaca");
