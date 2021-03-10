//   You're given a string of available characters and a string representing a
//   document that you need to generate. Write a function that determines if you
//   can generate the document using the available characters. If you can generate
//   the document, your function should return true; ; otherwise, it
//   should return false.

//   You're only able to generate the document if the frequency of unique
//   characters in the characters string is greater than or equal to the frequency
//   of unique characters in the document string. For example, if you're given
//   characters = "abcabc" and document = "aabbccc", you can't  generate the document because you're missing one
// 'c'.

// The document that you need to create may contain any characters, including
// special characters, capital letters, numbers, and spaces.
// Note: you can always generate the empty string ("").

//Input  = "Bste!hetsi ogEAxpelrt x "
//Output true

//Time O(n), Space O(n)
function generateDocument(characters, document) {
  let map = {};
  for (let char of characters) {
    if (!map[char]) map[char] = 1;
    else map[char]++;
  }
  for (let char of document) {
    if (!map[char]) return false;
    if (map[char] < 1) return false;
    map[char]--;
  }
  return true;
}
