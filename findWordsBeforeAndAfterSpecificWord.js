// Given a list of words, return n words before and after a particular word (including the word) as efficiently as possible.

// e.g the word is "leetcode" , n is 3.

// apple , bat , cat , fish , leetcode, snip , snap ,hat ,dog

// you should output: bat cat fish leetcode snip snap hat

// apple , bat , cat , fish , leetcode, leetcode, snip , snap ,hat ,dog

// you should output: bat cat fish leetcode leetcode snip snap AND cat fish leetcode leetcode snip snap hat
function findWords(words, word, n) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      let p = i - n;
      let howManyWordsToPush = n + 1 + n;
      while (howManyWordsToPush) {
        res.push(words[p]);
        p++;
        howManyWordsToPush--;
      }

      //OR
      // while(p<=i+n){
      // res.push(words[p]);
      // p++
      // }
    }
  }
  return res.join(",");
}
function findWords2(words, word, n) {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word) {
      res.push(words.slice(i - n, i));
      res.push(words.slice(i, i + n + 1));
    }
  }
  return res.join(",");
}
