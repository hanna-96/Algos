//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//Input: s = "()[]{}"
// Output: true

//Input: s = "([)]"
// Output: false

// Input: s = "{[]}"
// Output: true

//solution 1
var isValid = function (s) {
  let memo = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  //initialize a stack
  let stack = [];
  for (let bracket of s) {
    //if we come across an opening bracket ->push it to the stack
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
    }
    //if we come across any closing bracket compare it to the top(last) element in the stack
    //If they are matching pairs->pop() from stack
    //continue till the stack is empty
    else if (
      (stack.length && bracket === ")") ||
      (stack.length && bracket === "]") ||
      (stack.length && bracket === "}")
    ) {
      if (memo[bracket] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  //if the stavk is empty a->then we found all the mathcing pairs->So they are valid(return true)
  return !stack.length;
};
// Time complexity : O(n)O(n) because we simply traverse the given string one character at a time and push and pop operations on a stack take O(1)O(1) time.
// Space complexity : O(n)O(n) as we push all opening brackets onto the stack and in the worst case, we will end up pushing all the brackets onto the stack. e.g. ((((((((((.

//solution 2
var isValid = function (s) {
  let memo = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let bracket of s) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
    } else if (
      stack.length &&
      bracket === ")" &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    } else if (
      stack.length &&
      bracket === "]" &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else if (
      stack.length &&
      bracket === "}" &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
};
