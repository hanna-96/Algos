// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 
// Constraints:
// 1 <= n <= 8

//1.At each step make a choice (either we open a bracket ( or we close a bracket ) , or we can do both);
//2.Think about constraints : We cannot close a bracket before we open one.
//3.Edge case GOAl ; Stop when we found a combination of length = n*2;


//Time O(4^n'root of n);
//Space O(n);
var generateParenthesis = function (n) {
    let finalRes = [];
    backtracking("", finalRes, 0, 0, n);
    return finalRes;
  };
  
  function backtracking(
    curRes,
    finalRes,
    numOfOpeninBrackets,
    numOfClosingBrackets,
    n
  ) {
    //edge case
    if (curRes.length === n * 2) {

      finalRes.push(curRes);
    }
    if (numOfOpeninBrackets < n) {
      backtracking(
        curRes + "(",
        finalRes,
        numOfOpeninBrackets + 1,
        numOfClosingBrackets,
        n
      );
    }
    if (numOfClosingBrackets < numOfOpeninBrackets) {
      backtracking(
        curRes + ")",
        finalRes,
        numOfOpeninBrackets,
        numOfClosingBrackets + 1,
        n
      );
    }
  }
  