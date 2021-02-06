// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""
// Note:

// S will consist of lowercase letters and have length in range [1, 500].

var reorganizeString = function (S) {
  let arr = S.split("");
  //count how many times each character occur
  // sort by the most frequently appearing letters at the beginning
  // try to seperate the most frequently appearing char  with the next frequently appearing char
  //If we can do that =>It means we can create the string without  adjacent dublicates
  //We should try to gt rid of the most frequently appearing chars
  let obj = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }
  let countChars = Object.entries(obj);
  let sortedChars = countChars.sort((a, b) => b[1] - a[1]);

  let index = 0;
  for (let i = 0; i < sortedChars.length; i++) {
    let timesOccur = obj[sortedChars[i][0]];
    if (timesOccur > parseInt((S.length + 1) / 2)) return ""; //A character count that is larger than half of the string length is considered invalid;
    for (let j = 0; j < timesOccur; j++) {
      // Start filling characters to all the even indexs, i.e. 0, 2, 4,..., when we got to the end, start filling odd indexes i.e. 1,3,5,...
      // By filling the characters this way, we can make sure that no same characters will be adjacent to each other
      if (index > S.length - 1) index = 1;
      res[index] = sortedChars[i][0];
      index += 2;
    }
  }
  return res.join("");
};
//solution 2 using priority queue
var reorganizeString = function (S) {
  let hash = {},
    pq = [];
  for (let s of S) hash[s] = hash[s] + 1 || 1;

  for (let key in hash) pq.push([key, hash[key]]);

  pq.sort((a, b) => b[1] - a[1]);

  let res = "";
  while (pq.length != 0) {
    let lastChar = res[res.length - 1];
    let first = pq.shift();

    if (lastChar != first[0]) {
      res += first[0];
      if (first[1] != 1) pq.push([first[0], first[1] - 1]);
    } else {
      let second = pq.shift();
      if (second == null) return "";
      res += second[0];
      pq.push(first);
      if (second[1] != 1) pq.push([second[0], second[1] - 1]);
    }
    pq.sort((a, b) => b[1] - a[1]);
  }
  return res;
};
