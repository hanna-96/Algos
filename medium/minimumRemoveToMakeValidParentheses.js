/*
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"


Plan
-Create stack to store open brackets only
-Create a hash map to store indices of brackets to remove from input string if they are unnecessary(not matching)
- Loop through input string
- Store all ( in stack
- If we see a ) => check if there is sth in stack:
-If no => it's not mathching so store the index in map
- If there is an ( in stack -> pop()
-Once we finished looping check if there is still something left in stack:
-if so add those indices to hash map
- Eventually loop through input string and check:
- if the index is present in hash map =>then skip that char
-otherwise keep adding letters to a new string


Time O(n),Space O(n)
*/
var minRemoveToMakeValid = function (s) {
  const stack = [];
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") stack.push([char, i]);
    else if (char === ")") {
      if (!stack.length) map.set(i, true);
      // missing a matching (
      else stack.pop(); // found a pair =>pop it and keep going
    }
  }
  if (stack.length) {
    for (let [char, i] of stack) {
      map.set(i, true);
    }
  }
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!map.has(i)) newStr += s[i];
  }
  return newStr;
};
