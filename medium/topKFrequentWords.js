// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

//Time O(n log n);Space O(n)
var topKFrequent = function (words, k) {
  let sorted = words.sort();
  let map = new Map();
  let res = [];

  for (let word of sorted) {
    map.set(word, map.get(word) + 1 || 1);
  }

  let values = map.entries();
  let sortedValues = [...values].sort((a, b) => b[1] - a[1]);

  while (sortedValues.length && k > 0) {
    let [word, freq] = sortedValues.shift();
    res.push(word);
    k--;
  }
  return res;
};
