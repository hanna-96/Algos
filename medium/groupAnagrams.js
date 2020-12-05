// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: words = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: words = [""]
// Output: [[""]]
// Example 3:

// Input: words = ["a"]
// Output: [["a"]]

// O(w * n * log(n)) time
// O(wn) space - where w is the number of words and n is the length of the longest word
function groupAnagrams(words) {
  // Write your code here.
  let obj = {};
  //loop over each word
  for (let word of words) {
    //sort each word in alphabetical order
    //so that later when we find a corresponding word to this sortedWord=>we'll group them together
    let sortedWord = word.split("").sort().join("");
    //store the sorted word in obj and assign it a value to be an ARRAY of its matching words
    if (!obj[sortedWord]) {
      obj[sortedWord] = [word];
    } else {
      //storing the list of words that correspond to the sortedWord(anagram)
      obj[sortedWord].push(word);
    }
  }
  return Object.values(obj);
}
