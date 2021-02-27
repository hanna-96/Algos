// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

//Time O(n), space O(n)
const wordPattern = function (pattern, s) {
  let splitted = s.split(" ");
  if (splitted.length !== pattern.length) return false;

  //we can map each  letter from pattern to the word from string that hasn't been mapped before
  //Once we see that the word has laready been used we return false
  //OR once we see that the word mapped to the letter from pattern !== current word =>return false

  let set = new Set();
  let map = new Map();
  let p1 = 0;
  while (p1 < pattern.length && p1 < splitted.length) {
    if (!map.has(pattern[p1])) {
      if (set.has(splitted[p1])) return false;
      map.set(pattern[p1], splitted[p1]);
      set.add(splitted[p1]);
    } else {
      let value = map.get(pattern[p1]);
      if (value !== splitted[p1]) return false;
    }
    p1++;
  }
  return true;
};
//solution using two hash maps
//Time O(n), space O(n)
const wordPattern = (pattern, s) => {
  let splitted = s.split(" ");
  if (splitted.length !== pattern.length) return false;

  //we can map each  letter from pattern to the word from string that hasn't been mapped before
  //Once we see that the word has already been used we return false
  //OR once we see that the word mapped to the letter from pattern !== current word =>return false

  let map = new Map();
  let map2 = new Map();
  let p1 = 0;
  while (p1 < pattern.length && p1 < splitted.length) {
    if (!map.has(pattern[p1])) {
      map.set(pattern[p1], p1);
    }
    if (!map2.has(splitted[p1])) {
      map2.set(splitted[p1], p1);
    }
    let currentLetter = map.get(pattern[p1]);
    let currentWord = map2.get(splitted[p1]);
    if (currentLetter !== currentWord) return false;

    p1++;
  }
  return true;
};
