// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
//Time O(n), Space O(1)
var isIsomorphic = function (s, t) {
  //If you can map a string to another string letter by letter=>THEY are ISOMORPHIC
  //so loop through first string
  //1.check if haven't stored the current letter in map yet AND check if the corresponding letter from another string then map each  letter to letter from another string
  //map will look like
  //key = s[i], value: t[i]

  let set = new Set();
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      //before mapping,check if t[i] hasn't been mapped to another s[i] before
      if (set.has(t[i])) return false;
      map.set(s[i], t[i]);
      set.add(t[i]); //mark as mapped
    } else {
      if (map.get(s[i]) !== t[i]) return false;
    }
  }
  return true;
};
