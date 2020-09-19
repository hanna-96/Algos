// Palindrome Check
// Interviewer Prompt
// Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

// Examples
// isPal('car') => false
// isPal('racecar') => true
// isPal('RaCecAr') => true
// isPal('!? 100 ABCcba 001 ?!') => true
//solution using pointers
function isPalindrome(string) {
  let first = 0;
  let last = string.length - 1;
  while (first < last) {
    if (string[first] !== string[last]) return false;
    first++;
    last--;
  }
  return true;
}

//option 1
//Time complexity O(n^2)
//space O(1)
const isPalindrome = (str) => {
  str = str.toLowerCase();
  while (str.length) {
    let first = str[0]; //first char
    let last = str[str.length - 1]; //last char
    if (first !== last) return false;
    else {
      str.slice(1, str.length - 1);
      return true;
    }
  }
};
console.log(isPalindrome("!? 100 ABCcba 001 ?!"));

//option 2 recursive
//time O(n);space O(n)
const isPal = (str) => {
  str = str.toLowerCase();
  if (!str.length) return true;
  else {
    let first = str[0];
    let last = str[str.length - 1];
    if (first !== last) return false;
    else {
      str = str.slice(1, str.length - 1);
      //  console.log('sliced Str',str)
      return isPal(str);
    }
  }
};
console.log(isPal("rAcEcar"));

//option 3(naive)
const isPalindrome2 = (str) => {
  str = str.toLowerCase();
  let strCopy = str.split("").reverse().join("");
  // console.log("reversed str",strCopy)
  if (str !== strCopy) return false;
  return true;
};
console.log(isPalindrome2("recEcar"));
