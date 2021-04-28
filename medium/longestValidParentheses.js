var longestValidParentheses = function (s) {
  let stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0 && s[stack[stack.length - 1]] === "(") {
        stack.pop();
        max = Math.max(i - stack[stack.length - 1], max);
      } else {
        stack.push(i);
      }
    }
  }
  return max;
};
