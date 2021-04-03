//Time O(n), Space O(1);
var myAtoi = function (s) {
    let result = 0;
    let idx = 0;
    let sign = 1; // multiplied at the end to result to determine if the string is +ve or -ve
    let maxValueAllowed = 2 ** 31 - 1;
    let minValueAllowed = -(2 ** 31);
    s = s.trim(); // eliminate all whitespaces from the beginning of s;
  
    // determine is result number should be +ve or -ve
    if (s[idx] === "-") {
      sign = -1;
      idx++;
    } else if (s[idx] === "+") idx++;
  
    //Now traverse the entire string and convert it into integer
    // while our current char is an integral integer!!! (char >=0 && char <=9) =>that's how we check for integral integers
    // letters will be in range > 9
    while (s[idx] >= "0" && s[idx] <= "9") {
      result = result * 10 + (s[idx] - "0");
      if (sign === 1 && result > maxValueAllowed) return maxValueAllowed;
      if (sign === -1 && result > maxValueAllowed) return minValueAllowed; // we haven't converted result to - ve yet
      idx++;
    }
    return result * sign;
  };
  