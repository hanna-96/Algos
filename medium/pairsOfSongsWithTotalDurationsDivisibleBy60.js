// You are given a list of songs where the ith song has a duration of time[i] seconds.
// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:

// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

//Time O(n^2); Space O(1);
const numPairsDivisibleBy60 = (time) => {
    let count = 0;
  
    for (let i = 0; i < time.length; i++) {
      for (let j = i + 1; j < time.length; j++) {
        if ((time[i] + time[j]) % 60 === 0) {
          count++;
        }
      }
    }
    return count;
  };
  //solution 2
// for each number in times array find the value =  num % 60 ;
//and then find how much else we need to add to that value so that it becomes 60
//Time O(n); Space O(n)
const numPairsDivisibleBy60 = (time) => {
    let count = 0;
    let arr = new Array(60).fill(0);
    for (let i = 0; i < time.length; i++) {
      let t = time[i] % 60;
      let remaining = (60 - t) % 60;
      count += arr[remaining];
      if (arr[t] === 0) arr[t] = 1;
      else arr[t] += 1;
    }
  
    return count;
  };