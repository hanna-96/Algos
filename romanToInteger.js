//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3
// Example 2:

// Input: "IV"
// Output: 4

var romanToInt = function (s) {
  let dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    let nextEl = s[i + 1];
    let prevEl = s[i - 1];
    //basic cases
    if (el === "I" && nextEl !== "V" && nextEl !== "X") int += dictionary[el];
    else if (el === "X" && nextEl !== "L" && nextEl !== "C" && prevEl !== "I")
      int += dictionary[el];
    else if (el === "C" && nextEl !== "D" && nextEl !== "M" && prevEl !== "X")
      int += dictionary[el];
    else if (el === "I" && (nextEl === "V" || nextEl === "X")) int += 0;
    else if (el === "X" && (nextEl === "L" || nextEl === "C")) int += 0;
    else if (el === "C" && (nextEl === "D" || nextEl === "M")) int += 0;
    else if ((el === "V" || el === "X") && prevEl === "I")
      int += dictionary[el] - dictionary[prevEl];
    else if ((el === "L" || el === "C") && prevEl === "X")
      int += dictionary[el] - dictionary[prevEl];
    else if ((el === "D" || el === "M") && prevEl === "C")
      int += dictionary[el] - dictionary[prevEl];
    else int += dictionary[el];
  }
  return int;
};
