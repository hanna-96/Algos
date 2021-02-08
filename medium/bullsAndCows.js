// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. When your friend makes a guess, you provide a hint with the following info:

// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position.
// Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

// Example 1:

// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1807"
//   |
// "7810"
// Example 2:

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1123"        "1123"
//   |      or     |
// "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
// Example 3:

// Input: secret = "1022", guess = "1222"
// Output: "3A0B"

//Time O(n); Space O(n)
const getHint = (secret, guess) => {
  let cows = 0;
  let bulls = 0;
  let obj = {};
  let p1 = 0;

  for (let digit of secret) {
    if (!obj[digit]) obj[digit] = 1;
    else obj[digit]++;
  }

  while (p1 < secret.length) {
    if (secret[p1] === guess[p1]) {
      bulls++; //1+
      if (obj[secret[p1]] === 0) cows--;
      //if we visited this digit before and consiredred it for cows then take it away from cows and count it as bulls
      else obj[secret[p1]]--; //in case there are more digits , mark one as already considered
      p1++;
    } else {
      if (obj[guess[p1]] && obj[guess[p1]] > 0) {
        cows++; //1+1
        obj[guess[p1]]--;
      }
      p1++;
    }
  }
  return `${bulls}A${cows}B`;
};
