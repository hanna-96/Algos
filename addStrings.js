// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


//Time O(max(N,M)), where N is the length of num1, M- length of num2
//Space O(max(N,M)), because the length of the result string is at most max(N,M)+1
const addStrings = (num1, num2) => {
    // let list1 = new LinkedList(0);
    // let list2 = new LinkedList(0);
    // iterate through two string simaltenuesly starting from the end and sum up digits, taking care of carry
    let res = [];
    let p1 = num1.length - 1;
    let p2 = num2.length - 1;
    let carry = 0;
  
    while (p1 >= 0 || p2 >= 0 || carry !== 0) {
      let firstNum, secondNum;
      firstNum = p1 >= 0 ? num1[p1] - "0" : 0;
      secondNum = p2 >= 0 ? num2[p2] - "0" : 0;
  
      let sum = firstNum + secondNum + carry; //1+1+0
      let newNum = sum % 10;
  
      res.push(newNum);
      carry = Math.floor(sum / 10);
      p1--;
      p2--;
    }
    if (carry !== 0) res.push(carry);
    return res.reverse().join("");
  };
  