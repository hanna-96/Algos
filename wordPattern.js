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
    let p2 = 0;
    while (p1 < pattern.length && p2 < splitted.length) {
      if (!map.has(pattern[p1])) {
        if (set.has(splitted[p2])) return false;
        map.set(pattern[p1], splitted[p2]);
        set.add(splitted[p2]);
      } else {
        let value = map.get(pattern[p1]);
        if (value !== splitted[p2]) return false;
      }
      p1++;
      p2++;
    }
    return true;
  };
  