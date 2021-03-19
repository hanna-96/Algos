// Given a sequence of words, check whether it forms a valid word square.
// A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).
// Note:

// The number of words given is at least 1 and does not exceed 500.
// Word length will be at least 1 and does not exceed 500.
// Each word contains only lowercase English alphabet a-z.
// Example 1:

// Input:
// [
//   "abcd",
//   "bnrt",
//   "crmy",
//   "dtye"
// ]

// Output:
// true

// Explanation:
// The first row and first column both read "abcd".
// The second row and second column both read "bnrt".
// The third row and third column both read "crmy".
// The fourth row and fourth column both read "dtye".

// Therefore, it is a valid word square.

const validWordSquare = (words) => {
  //find and store the length of each word
  let lengthesOfEachWord = words.map((word) => word.length);
  //find the max length of the word
  let maxLength = Math.max(...lengthesOfEachWord);
  let j = 0;
  while (j < maxLength) {
    for (let i = 0; i < words.length; i++) {
      if ((words[i] && !words[j]) || (words[j] && !words[i])) return false;
      if (words[i][j] !== words[j][i]) return false;
    }
    j++;
  }
  return true;
};
