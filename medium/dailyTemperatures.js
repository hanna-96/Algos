// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
//Time O(n^2);Space O(n);
var dailyTemperatures = function (T) {
  let result = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    for (let j = i + 1; j <= T.length; j++) {
      if (T[i] < T[j]) {
        result[i] = j - i;
        break;
      } else if (j === T.length) result[i] = 0;
    }
  }
  return result;
};
//Optimal solution using stack
//Time O(n);Space O(n);
var dailyTemperatures = function (T) {
  let result = new Array(T.length).fill(0);
  let stack = [];
  for (let i = 0; i < T.length; i++) {
    let temp = T[i];
    if (stack.length && T[stack[stack.length - 1]] < temp) {
      while (T[stack[stack.length - 1]] < temp) {
        let idx = stack.pop();
        result[idx] = i - idx;
      }
    }
    stack.push(i);
  }

  return result;
};
