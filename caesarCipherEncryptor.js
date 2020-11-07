//Given a non empty string of lowercase letters and a non-negative integer
//representing a key, write a func that returns a new string obtained by
//shifting every letter in the input string by k positions in the alphabet
//where k is the key.
//Note that letters should "wrap" around the alphabet;
//in other words,the letter z shifted by one return letter a.

//Input 'xyz' , 2
//Output 'zab'

//time O(n);
//space O(n)
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  if (key === 0) return string;
  let result = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string.length; i++) {
    console.log("char", string[i]);
    //grab the current char from input and find at what idx is it in alphabet
    let curIdx = alphabet.indexOf(string[i]); //23
    console.log("currentIdx", curIdx);
    //find the needed idx of the letter that should replace it (from alphabet)
    let newIdx = curIdx + key; //25
    console.log("newIdx", newIdx);
    while (newIdx >= 26) {
      newIdx = newIdx - 26;
      console.log("newIdx in loop", newIdx);
    }
    //find that new letter and add it to the result string
    result += alphabet.charAt(newIdx);
    console.log("results string", result);
  }
  return result;
}
