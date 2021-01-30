// A valid parentheses string is either empty (""), "(" + A + ")", or A + B,
//where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()",
//and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty,
// and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition:
//S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string
//in the primitive decomposition of S.
// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

//Time O(n),Space O(n)
const removeOuterParentheses = (S) => {
  let res = "";
  //loop and check if we find a pair of the parentheses ->check if it is inside another ()
  //if so ->addd it to the res

  //define a stack where we'll store all ( brackets
  let stack = []; //[(,(]
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    console.log("stack", stack);
    if (char === "(") {
      if (stack.length) {
        res += char;
        ("(");
      }
      stack.push(char);
    } else if (char === ")") {
      stack.pop();
      //after I popped if there's still at least one ( left in stack ->it means the current pair was nested
      if (stack.length) res += S[i]; // '()'
    }
  }
  return res;
};
