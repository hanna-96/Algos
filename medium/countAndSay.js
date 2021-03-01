// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is 
//a contiguous section all of the same character. Then for each group, say the number of characters, then say the character.
// To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"


const countAndSay = (n) => {
    //n = 4
    //recursive (4-1)=> n=3 say '21'=>  one 2 + one 1
    //recursive (3-1)=>n = 2 say '11' =>"21"
    //recursive (2-1)=>n = 1 say 1 =>'11'
    //hit base case !!! return "1" and bubble up
  
    return helper(n, "1");
  };
  
  function helper(n, str) {
    if (n === 1) {
      return str;
    } else {
      let copy = "";
      let stack = [];
  
      for (let char of str) {
        if (!stack.length || stack[stack.length - 1][1] !== char)
          stack.push([1, char]);
        else {
          stack[stack.length - 1][0]++;
        }
      }
      for (let char of stack) {
        let say = char[0];
        copy += `${say}${char[1]}`; //'11'
      }
      return helper(n - 1, copy);
    }
  }

  //solution 2 without using a stack
  const countAndSay = (n, str = '1') => {
    if (n === 1) {
      return str;
    }
    let newStr = '',
      count = 0,
      say = str[0];
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === say) {
        count += 1;
      } else {
        newStr += count + say;
        count = 1;
        say = str[i];
      }
    }
    return countAndSay(n - 1, newStr + count + say);
  };
  