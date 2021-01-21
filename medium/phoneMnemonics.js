//If you open the keypad of your mobile phone, it'll likely look like this:
// ----- ----- -----
// |     |     |     |
// |  1  |  2  |  3  |
// |     | abc | def |
//  ----- ----- -----
// |     |     |     |
// |  4  |  5  |  6  |
// | ghi | jkl | mno |
//  ----- ----- -----
// |     |     |     |
// |  7  |  8  |  9  |
// | pqrs| tuv | wxyz|
//  ----- ----- -----
//       |     |
//       |  0  |
//       |     |
//        -----

// Almost every digit is associated with some letters in the alphabet; this
// allows certain phone numbers to spell out actual words. For example, the phone
// number 8464747328  can be written as timisgreat ;similarly, the phone number 2686463
// can be written as antoine or as ant6463 .

// It's important to note that a phone number doesn't represent a single sequence
// of letters, but rather multiple combinations of letters. For instance, the
// digit 2  can represent three different letters (a, b, and c).

// A mnemonic is defined as a pattern of letters, ideas, or associations that
// assist in remembering something. Companies oftentimes use a mnemonic for their
// phone number to make it easier to remember.

// Given a stringified phone number of any non-zero length, write a function that
// returns all mnemonics for this phone number, in any order.

// For this problem, a valid mnemonic may only contain letters and the digits
//   0 and 1 .. In other words, if a digit is able to be
//   represented by a letter, then it must be. Digits 0 and 1  are the only two digits that don't have letter representations
//   on the keypad.
//Input = '1905';
//Output [
//   "1w0j",
//   "1w0k",
//   "1w0l",
//   "1x0j",
//   "1x0k",
//   "1x0l",
//   "1y0j",
//   "1y0k",
//   "1y0l",
//   "1z0j",
//   "1z0k",
//   "1z0l",
// ]

//Time O(4^n * n) (reads like 4 to the exponent n times n), because we will have at most 4 recursive calls
//because the max amount of letters corresponding to digit is 4. And * n because with each base case
//we'll have to create new mnemonics(strings of n size);
// where n-is the length of the input phoneNumber
//Space O(4^n * n)
function phoneNumberMnemonics(phoneNumber) {
  let hash = {
    0: ["0"],
    1: ["1"],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let final = [];
  let curResults = [];
  //pichChar will look up in obj and pick all the possible letters that correspond to the digit at the idx
  function pickChar(idx, phoneNumber, curResults, final) {
    //base case
    //once we don't have any more letters to pick for =push the current mnemonic to final arr
    if (idx === phoneNumber.length) {
      final.push(curResults.join(""));
    } else {
      let digit = phoneNumber[idx];
      console.log("digit", digit);
      let letters = hash[digit]; //[w,x,y,z]   [j,k,l]
      // console.log('letters',letters)

      for (let letter of letters) {
        curResults[idx] = letter; //[1,w,0,j ]
        // console.log('curres',curResults)
        //!!!when we reach the final digit first time, we make all the possible mnemonics with all letters that
        //correspond that digit 	leaving previous letters of prev digits not changing.
        //As soon as we don't have any letters left corresponding to the digit=>GO back in the string and
        //change sth
        //1.firstly we pick 1 and call recursion at idx = 1
        //2.we pick 9, add just w (for now) ro curresults  and call recursion at idx = 2
        //3. we pick 0,add 0 to curres and call recursion at idx = 3
        //4.we pick 5 ,add j to curres,and call recursion at idx = 4
        // THEN WE HIT BASE CASE (we already created our first mnemonic)
        // 5.we're done with the last recursive call SO we go back to the previous call(when we picked 5)
        //and then try the next letter that corresponds to digit 5 (which is k)
        //6.call recursion again +>AND WE HIT BASE CASE AGAIN
        //GO BACK TO PREV RECURSIVE CALL(at digit 0),we are done with it
        //GO BACK AGAIN TO PREV CALL(at digit 9) and
        //call recursion on the next corresponding letter
        //and so on .....
        pickChar(idx + 1, phoneNumber, curResults, final);
      }
    }
  }

  pickChar(0, phoneNumber, curResults, final);

  return final;
}
