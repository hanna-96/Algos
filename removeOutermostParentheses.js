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
