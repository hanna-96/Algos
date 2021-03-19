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
