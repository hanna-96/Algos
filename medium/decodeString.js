// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

//Time O(n);Space O(n)
var decodeString = function (s) {
  //     k is how many times we repeat str;
  //     [ - now I need to start storing what I want to repeat;
  //     ]- now start repeating what is in between [...]

  let timesToMultiply = [2]; // stack: keeps track of numbers added;The last number added will be the 1st removed
  let prevRepeatedStr = ["abcabcabc"]; //stack to store previously repeated letters
  let tempMultiplier = "";
  let finalStr = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      tempMultiplier += s[i];
      //in case the next el is also a number store it in a tempMultiplier
    } else if (s[i] === "[") {
      //now we start storing how many times we need to repeat the upcoming string
      timesToMultiply.push(tempMultiplier); //3
      tempMultiplier = ""; //set it back to empty until we find a new number
      // store WHAT we have already repeated previously
      //NOTE: at first time we store "" as we are still at "["
      prevRepeatedStr.push(finalStr);
      finalStr = ""; //reset it to ""
    } else if (s[i] === "]") {
      //repeat the string NOW
      finalStr = prevRepeatedStr.pop() + finalStr.repeat(timesToMultiply.pop());
    } else {
      //if we are looking at letter
      finalStr += s[i];
    }
  }
  return finalStr;
};
