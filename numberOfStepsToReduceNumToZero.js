//Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2,
// otherwise, you have to subtract 1 from it.
// Example 1:

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.

//solution 1 using while loop
//Time O(n)
//Space O(1)
var numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    // num %2=== 0 ? num/=2 : num-=1
    if (num % 2 === 0) {
      num /= 2;
      steps += 1;
    } else {
      num -= 1;
      steps += 1;
    }
  }
  return steps;
};
//solution 2 using recursion
var numberOfSteps = function (num) {
  let steps = 0;
  if (num === 0) return steps;
  if (num % 2 === 0) {
    steps++;
    return steps + numberOfSteps(num / 2);
  } else if (num % 2 === 1) {
    steps++;
    return steps + numberOfSteps(num - 1);
  }
};
