// Implement int sqrt(int x).
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since
//              the decimal part is truncated, 2 is returned.

//Time O(n log n) because with each iteration we get rid of a half og our loop
//Space O(1)
var mySqrt = function (x) {
  //square root of a number is any number where if it's multiplied by itself equals the target number

  //edge case! because 0 and 1 are their own square roots
  if (x < 2) return x;

  //how many numbers are there so that after they are multiplied by themselves  equal to 8??
  //1 2 3 4 5 6 7 8

  //now we need to figure out which one of these numbers can multiply by itself and result in x

  //use binary search
  //initialize pointers
  let left = 2; //because 2 will be always the min num to start from
  let right = x;
  while (left < right) {
    let midPoint = Math.floor((right + left) / 2);
    if (midPoint * midPoint === x) {
      return midPoint;
    } else if (midPoint * midPoint > x) {
      //eliminate the half again
      right = midPoint;
    } else {
      //eliminate the half again
      left = midPoint + 1;
    }
  }
  //once we are done looping and if still havent found the matching number we just return
  //the one that was the closest (previous to the the one at which the loop stopped)
  return left - 1;
};
//same Big O
//solution 2
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // let mid = left + Math.floor((right -left) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    }
  }
  return right;
};
