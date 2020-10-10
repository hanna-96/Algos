//Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
//Answer
// Use a hash table instead of a fixed size counter.
//  Imagine allocating a large size array to fit the entire range of unicode characters, 
//  which could go up to more than 1 million. 
//  A hash table is a more generic solution and could adapt to any range of characters.
//time O(n);
//Space O(1)  Although we do use extra space, the space complexity is 
// O(1) because the table's size stays constant no matter how large n is.
var isAnagram = function (s, t) {
  let counter = 0;
  if (s.length !== t.length) return false;
  let dictionary = {};
  for (let char of t) {
    if (!dictionary[char]) {
      dictionary[char] = 1;
    } else {
      dictionary[char]++;
    }
  }
  for (let char of s) {
    if (!dictionary[char]) {
      return false;
    }
    //check if the count of the exising letter in obj exceeds the count of the current letters
    //If we’re subtracting more specific letters from the first word than the first word even has, it means the second word 
    //has more letter “l”s than the first word, making it not an anagram.
    if (dictionary[char] < 1) return false;
    dictionary[char]--;
  }
  return true;
};
