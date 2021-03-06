// With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:
// word contains the first letter of puzzle.
// For each letter in word, that letter is in puzzle.
// For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).
// Return an array answer, where answer[i] is the number of words in the given word list words that are valid with respect to the puzzle puzzles[i].

// Example :

// Input:
// words = ["aaaa","asas","able","ability","actt","actor","access"],
// puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
// Output: [1,1,3,2,4,0]
// Explanation:
// 1 valid word for "aboveyz" : "aaaa"
// 1 valid word for "abrodyz" : "aaaa"
// 3 valid words for "abslute" : "aaaa", "asas", "able"
// 2 valid words for "absoryz" : "aaaa", "asas"
// 4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
// There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.

// Constraints:

// 1 <= words.length <= 10^5
// 4 <= words[i].length <= 50
// 1 <= puzzles.length <= 10^4
// puzzles[i].length == 7
// words[i][j], puzzles[i][j] are English lowercase letters.
// Each puzzles[i] doesn't contain repeated characters.

//brute force approach
function find(wordList, keypads) {
  let map = {};
  let res = new Array(keypads.length);

  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      if (!map[wordList[i]]) map[wordList[i]] = [wordList[i][j]];
      map[wordList[i]].push(wordList[i][j]);
    }
  }

  for (let i = 0; i < keypads.length; i++) {
    let currentWord = keypads[i];
    let howManyWord = 0;
    let firstLetter = currentWord[0];
    let smallCount = [];
    for (let word in map) {
      let count = -1;
      //iterating through all chars from map that belong to each word
      for (let char of map[word]) {
        if (!map[word].includes(firstLetter)) {
          count = 0;
          break;
        } else if (!currentWord.includes(char)) {
          count = 0;
          break;
        }
      }
      if (count !== 0) {
        howManyWord++;
      }
    }
    res[i] = howManyWord;
  }
  return res;
}

//bit manipulation approach
var findNumOfValidWords = function (words, puzzles) {
    var aCharCode = "a".charCodeAt();
    var puzzlesLetters = new Array(puzzles.length);
    var firstLetter = new Array(puzzles.length);
    for (var i = 0; i < puzzles.length; i++) {
      puzzlesLetters[i] = firstLetter[i] =
        1 << (puzzles[i][0].charCodeAt() - aCharCode);
      for (var j = 1; j < puzzles[i].length; j++) {
        puzzlesLetters[i] |= 1 << (puzzles[i][j].charCodeAt() - aCharCode);
      }
    }
  
    var result = new Array(puzzles.length).fill(0);
    var wordsLetters;
    for (var i = 0; i < words.length; i++) {
      wordsLetters = 0;
      for (var j = 0; j < words[i].length; j++) {
        wordsLetters |= 1 << (words[i][j].charCodeAt() - aCharCode);
      }
  
      for (var j = 0; j < puzzles.length; j++) {
        if (
          (puzzlesLetters[j] & wordsLetters) === wordsLetters &&
          (firstLetter[j] & wordsLetters) === firstLetter[j]
        ) {
          result[j]++;
        }
      }
    }
  
    return result;
  };
  
// find(
//   ["APPLE", "PLEAS", "PLEASE"],
//   ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"]
// );
