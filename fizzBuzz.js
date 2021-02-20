// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for
// the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]
const fizzBuzz = (n) => {
  //if num % 3 ===0 =>num = "Fizz"
  //if num % 5 === 0 =>num = "Buzz"
  //if num % 3 ===0  && num % 5 === 0 =>num = 'FizzBuzz'
  let num = 1;
  let res = [];

  while (n >= 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      res.push("FizzBuzz");
    } else if (num % 3 === 0) res.push("Fizz");
    else if (num % 5 === 0) res.push("Buzz");
    else {
      res.push(num.toString());
    }
    num++;
    n--;
  }
  return res;
};
//solution 2
//Time O(n),space O(1)
const fizzBuzz = (n) => {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let num = i;
    let divisibleBy3 = num % 3 === 0;
    let divisibleBy5 = num % 5 === 0;
    let str = "";
    if (divisibleBy3) str += "Fizz";
    if (divisibleBy5) str += "Buzz";
    else if (!str.length) {
      str = num.toString();
    }
    res.push(str);
  }
  return res;
};
