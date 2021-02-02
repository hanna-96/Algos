//Reverse the words in string. For example: "I love coding!" to "coding! love I";
//You are not allowed to use split and reverse methods.

//solution 1
//Time O(n);Space O(n)
function reverseWordsInString(string) {
  //loop through input string
  //once we find whitespace let'a slice the word before it and store in words array
  //and immediately push the whitespace to the words arrray
  let words = [];

  let start = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      words.push(string.slice(start, i)); //slice the word and push it to words array
      start = i; //leave at first found whitespace
    } else if (string[start] === " ") {
      words.push(string[start]); //push a whitespace to words and go ahead
      start = i; //10
    }
  }
  words.push(string.slice(start));
  //reverse the whole words array now
  words = reverse(words);
  return words.join("");
}
function reverse(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let swap = array[start];
    array[start] = array[end];
    array[end] = swap;
    start++;
    end--;
  }
  return array;
}

//solution 2
function reverseWordsInString(string) {
  //PLAN:
  //1.reverse the whole input string;
  //2.reverse each word back in the reversed string
  let reversedString = [];

  //reverse the whole input string first
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }

  //now reverse each word in the reversed string
  let startIdx = 0;

  while (startIdx < reversedString.length) {
    let endIdx = startIdx;
    while (endIdx < reversedString.length && reversedString[endIdx] !== " ") {
      endIdx++; //move endIdx until it points to whitespace
    }
    //when we break from the loop endIdx will be pointing to "whitespace" =>
    //that's time to reverse the word
    reverseWord(startIdx, endIdx - 1, reversedString);
    startIdx = endIdx + 1; //skip the whitespace
  }
  return reversedString.join("");
}

function reverseWord(start, end, word) {
  while (start < end) {
    let swap = word[start];
    word[start] = word[end];
    word[end] = swap;
    start++;
    end--;
  }
}
