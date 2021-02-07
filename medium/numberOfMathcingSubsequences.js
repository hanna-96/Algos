// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input:
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
//Time O(n^2);
// Space O(1);
const numMatchingSubseq = (S, words) => {
  let count = 0;
  for (let word of words) {
    if (isSubsequence(word, S)) count++;
  }
  return count;
};

function isSubsequence(word, string) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < word.length && p2 < string.length) {
    if (word[p1] === string[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return p1 === word.length;
}
