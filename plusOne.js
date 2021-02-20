// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [9,9]
// Output: [1,0,0]

// Example 3:

// Input: digits = [0]
// Output: [1]

const plusOne = (digits) => {
  //199 =>200
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  //if we ever come to this point when we never hit the return statements inside loop=>it means that we have an array of 0s
  //so we just insert 1 at the beginning (ex. 999 => [1,0,0,0])
  digits.unshift(1);
  return digits;
};
