// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.

//Time O(n log n)
const frequencySort = (s) => {
  let map = new Map();

  for (let char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }
  let res = [];
  for (let [char, count] of map.entries()) {
    res.push([char, count]);
  }
  res = res.sort((a, b) => b[1] - a[1]);
  let finalStr = "";
  for (let [char, count] of res) {
    finalStr += char.repeat(count);
  }
  return finalStr;
};

//solution 2 , using bucket sort
//Time O(n), space O(n)
var frequencySort = function (s) {
  const freqMap = new Map();
  const bucket = [];
  let output = "";

  for (let c of s) {
    freqMap.set(c, (freqMap.get(c) || 0) + 1);
  }
  for (let [char, freq] of freqMap) {
    if (bucket[freq] === undefined) bucket[freq] = [char];
    else bucket[freq].push(char); // if there're several chars with the same frequnce count => store them together
  }
  // eventually bucket array will be sorted, because those letteres that have largest freq count will be at the very end of bucket array;
  // In bucket array i === freq count
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] === undefined) continue;

    for (let char of bucket[i]) {
      output += char.repeat(i);
    }
  }
  return output;
};
